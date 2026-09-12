import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton, Screen } from '@/ui';
import { AppColors } from '@/constants/theme';
import { useApp } from '@/context/app-context';
export default function DonationSuccessScreen() {
  const router = useRouter(); const { id } = useLocalSearchParams<{ id: string }>(); const { draft, resetDraft } = useApp();
  return <Screen><View style={styles.center}><View style={styles.check}><Text style={styles.checkText}>Posted</Text></View><Text style={styles.title}>Your food is now available for rescue.</Text><Text style={styles.copy}>Donation {id || 'VAA'} has been shared with {draft.destinationName || 'the selected recipient'}. We’ll show the next step as soon as someone accepts.</Text></View><PrimaryButton label="Track donation" onPress={() => { resetDraft(); router.replace(`/donor/activity/${id}` as never); }} /></Screen>;
}
const styles = StyleSheet.create({ center: { minHeight: 540, justifyContent: 'center', gap: 16 }, check: { minWidth: 70, height: 36, alignSelf: 'flex-start', paddingHorizontal: 12, borderRadius: 18, backgroundColor: AppColors.primarySoft, justifyContent: 'center', alignItems: 'center' }, checkText: { color: AppColors.primary, fontSize: 13, fontWeight: '900' }, title: { color: AppColors.ink, fontSize: 31, lineHeight: 38, fontWeight: '900', letterSpacing: -0.7 }, copy: { color: AppColors.muted, fontSize: 16, lineHeight: 24 }, });
