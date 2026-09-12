import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DestinationCard } from '@/components/donations/destination-card';
import { DonationFlowProgress } from '@/components/donations/donation-flow-progress';
import { useApp } from '@/context/app-context';
import { donationService } from '@/services/donations';
import { PrimaryButton, Screen, SecondaryButton, Skeleton, colors, spacing, typography } from '@/ui';
import type { DonationDestination } from '@/types/domain';

export default function DestinationScreen() {
  const router = useRouter(); const { draft, updateDraft } = useApp(); const [destinations, setDestinations] = useState<DonationDestination[]>([]); const [loading, setLoading] = useState(true);
  useEffect(() => { donationService.listDestinations().then((items) => { setDestinations(items); setLoading(false); }); }, []);
  const choose = (destination: DonationDestination) => updateDraft({ destinationId: destination.id, destinationName: destination.name });
  return <Screen title="Choose where it can help" subtitle="These recipients are ready to coordinate a safe pickup. Availability is mocked for this prototype."><DonationFlowProgress step={2} /><View style={styles.intro}><Text style={styles.title}>Recipients near Pune</Text><Text style={styles.copy}>Capacity and pickup window are shown before you commit, so no one is left guessing.</Text></View><View style={styles.list}>{loading ? <><Skeleton height={180} /><Skeleton height={180} /><Skeleton height={180} /></> : destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} selected={draft.destinationId === destination.id} onPress={() => choose(destination)} />)}</View><PrimaryButton label="Set portions" disabled={!draft.destinationId} onPress={() => router.push('/donor/donate/portions' as never)} /><SecondaryButton label="Back" onPress={() => router.back()} /></Screen>;
}
const styles = StyleSheet.create({ intro: { gap: spacing.xs, paddingVertical: spacing.sm }, title: typography.heading3, copy: { ...typography.body, color: colors.textMuted }, list: { gap: spacing.sm } });
