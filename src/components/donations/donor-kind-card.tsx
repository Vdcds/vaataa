import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, colors, radius, spacing, typography } from '@/ui';
import type { DonorKind } from '@/types/domain';

const copy: Record<DonorKind, { title: string; description: string; detail: string }> = {
  individual: { title: 'Individual', description: 'A meal, pantry item, or a small home surplus.', detail: 'Personal donation' },
  party: { title: 'Party or event', description: 'Food left after a celebration, meeting, or gathering.', detail: 'Event surplus' },
  organisation: { title: 'Organisation', description: 'A canteen, café, office, or business donation.', detail: 'Regular or one-time' },
  group: { title: 'Community group', description: 'A housing society, resident group, or shared kitchen.', detail: 'Collective donation' },
};

/** Selection cards communicate donor context without relying on decorative iconography. */
export function DonorKindCard({ kind, selected, onPress }: { kind: DonorKind; selected: boolean; onPress: () => void }) {
  const item = copy[kind];
  return <Pressable accessibilityRole="radio" accessibilityLabel={`Donate as ${item.title}`} accessibilityState={{ checked: selected }} onPress={onPress} style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}><Card variant={selected ? 'raised' : 'outlined'} style={[styles.card, selected && styles.selected]}><View style={styles.topline}><Text style={styles.detail}>{item.detail}</Text>{selected && <View style={styles.selectedMark}><Text style={styles.check}>Selected</Text></View>}</View><Text style={typography.heading3}>{item.title}</Text><Text style={styles.description}>{item.description}</Text></Card></Pressable>;
}
const styles = StyleSheet.create({ pressable: { minHeight: 118 }, pressed: { opacity: 0.82 }, card: { minHeight: 118, gap: spacing.xs }, selected: { borderColor: colors.primary, borderWidth: 2, padding: spacing.lg - 1 }, topline: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm, alignItems: 'center' }, detail: { ...typography.caption, color: colors.textMuted }, selectedMark: { borderRadius: radius.full, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs, backgroundColor: colors.primarySoft }, check: { ...typography.caption, color: colors.primary, fontWeight: '800' }, description: { ...typography.body, color: colors.textMuted } });
