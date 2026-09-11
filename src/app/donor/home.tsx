import { DonationCard } from "@/components/donations/donation-card";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { Screen } from "@/components/ui/screen";
import { AppColors, Layout } from "@/constants/theme";
import { useApp } from "@/context/app-context";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function DonorHome() {
  const router = useRouter();
  const { donations, setRole } = useApp();
  const mine = donations.filter((item) => item.donorId === "current-donor");
  /** Enables one-device end-to-end review while real account switching is not built. */
  const openVolunteerMock = () => {
    setRole("volunteer");
    router.replace("/ngo/home" as never);
  };
  return (
    <Screen
      eyebrow="Good afternoon"
      title="Make surplus count."
      subtitle="A few clear details can help food get to the right place faster."
    >
      <View style={styles.impact}>
        <Text style={styles.impactNumber}>0</Text>
        <View>
          <Text style={styles.impactTitle}>meals rescued by you</Text>
          <Text style={styles.impactCopy}>
            Your community impact starts here.
          </Text>
        </View>
      </View>
      <PrimaryButton
        label="Donate food"
        onPress={() => router.push("/donor/donate" as never)}
      />
      <SecondaryButton
        label="Preview volunteer workflow"
        onPress={openVolunteerMock}
      />
      <View style={styles.sectionHead}>
        <Text style={styles.section}>Your activity</Text>
        {mine.length > 0 && (
          <SecondaryButton
            label="View all"
            onPress={() => router.push("/donor/activity" as never)}
          />
        )}
      </View>
      {mine.length ? (
        mine
          .slice(0, 2)
          .map((donation) => (
            <DonationCard
              key={donation.id}
              donation={donation}
              onPress={() =>
                router.push(`/donor/activity/${donation.id}` as never)
              }
            />
          ))
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No food posted yet</Text>
          <Text style={styles.emptyCopy}>
            When you post a donation, its rescue progress will appear here.
          </Text>
        </View>
      )}
    </Screen>
  );
}
const styles = StyleSheet.create({
  impact: {
    padding: 18,
    borderRadius: Layout.cardRadius,
    backgroundColor: AppColors.primary,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  impactNumber: { color: "#fff", fontSize: 38, fontWeight: "900" },
  impactTitle: { color: "#fff", fontSize: 15, fontWeight: "800" },
  impactCopy: { color: "#DDEBDD", fontSize: 13, marginTop: 3 },
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  section: { color: AppColors.ink, fontSize: 18, fontWeight: "800" },
  empty: {
    padding: 22,
    borderRadius: Layout.cardRadius,
    backgroundColor: AppColors.surfaceMuted,
    gap: 5,
  },
  emptyTitle: { color: AppColors.ink, fontWeight: "800", fontSize: 16 },
  emptyCopy: { color: AppColors.muted, lineHeight: 20 },
});
