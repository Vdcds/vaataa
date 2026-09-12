import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { DonationFlowProgress } from '@/components/donations/donation-flow-progress';
import { DonorKindCard } from '@/components/donations/donor-kind-card';
import { useApp } from '@/context/app-context';
import { PrimaryButton, Screen, SecondaryButton, colors, spacing, typography } from '@/ui';
import type { DonorKind } from '@/types/domain';

const options: DonorKind[] = ['individual', 'party', 'organisation', 'group'];

export default function DonorKindScreen() {
  const router = useRouter(); const { draft, updateDraft } = useApp();
  const selectKind = (donorKind: DonorKind) => updateDraft({ donorKind, estimatedServings: draft.estimatedServings || '12', quantity: draft.quantity || '12 portions' });
  return <Screen title="Who is sharing this food?" subtitle="This helps us suggest recipients that can handle the donation well."><DonationFlowProgress step={1} /><View style={styles.note}><Text style={styles.noteTitle}>Your role stays as donor</Text><Text style={styles.noteCopy}>NGO or volunteer access is chosen only when you sign in. This step only describes this donation.</Text></View><View style={styles.options}>{options.map((kind) => <DonorKindCard key={kind} kind={kind} selected={draft.donorKind === kind} onPress={() => selectKind(kind)} />)}</View><PrimaryButton label="Choose a recipient" disabled={!draft.donorKind} onPress={() => router.push('/donor/donate/destination' as never)} /><SecondaryButton label="Save and exit" onPress={() => router.replace('/donor/home' as never)} /></Screen>;
}
const styles = StyleSheet.create({ note: { gap: spacing.xs, paddingLeft: spacing.md, borderLeftWidth: 3, borderLeftColor: colors.primary }, noteTitle: typography.label, noteCopy: { ...typography.caption, color: colors.textMuted }, options: { gap: spacing.sm } });
