import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AppColors, Layout } from '@/constants/theme';
import { categoryLabels } from '@/data/mock-donations';
import type { Donation, DonationStatus } from '@/types/domain';

const statusText: Record<DonationStatus, string> = { draft: 'Draft', posted: 'Available', under_review: 'Under review', accepted: 'Accepted', pickup_started: 'Pickup planned', picked_up: 'Collected', en_route: 'En route', delivered: 'Delivered', cancelled: 'Cancelled' };
export function StatusPill({ status }: { status: DonationStatus }) { return <View style={[styles.pill, (status === 'posted' || status === 'accepted') && styles.pillWarm, status === 'delivered' && styles.pillGreen]}><Text style={styles.pillText}>{statusText[status]}</Text></View>; }
/** Compact listing summary is shared by donor activity and volunteer discovery. */
export function DonationCard({ donation, onPress }: { donation: Donation; onPress: () => void }) {
  return <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
    <View style={styles.top}><View style={styles.foodGlyph}><Text>◒</Text></View><View style={styles.grow}><Text style={styles.title}>{donation.title}</Text><Text style={styles.meta}>{categoryLabels[donation.category]} · {donation.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}</Text></View><StatusPill status={donation.status} /></View>
    <View style={styles.details}><Text style={styles.detail}>{donation.estimatedServings} meals</Text><Text style={styles.dot}>•</Text><Text style={styles.detail}>{donation.pickupArea}</Text><Text style={styles.dot}>•</Text><Text style={styles.detail}>Until {donation.availableUntil.replace('Today, ', '')}</Text></View>
  </Pressable>;
}
export function DetailRow({ label, value }: { label: string; value?: string | number }) { return <View style={styles.detailRow}><Text style={styles.rowLabel}>{label}</Text><Text style={styles.rowValue}>{value || '—'}</Text></View>; }
const styles = StyleSheet.create({
  card: { gap: 16, padding: 16, borderRadius: Layout.cardRadius, backgroundColor: AppColors.surface, borderWidth: 1, borderColor: AppColors.line }, pressed: { opacity: 0.72 }, top: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' }, foodGlyph: { width: 38, height: 38, borderRadius: 12, backgroundColor: AppColors.primarySoft, alignItems: 'center', justifyContent: 'center' }, grow: { flex: 1, gap: 3 }, title: { color: AppColors.ink, fontSize: 16, fontWeight: '800' }, meta: { color: AppColors.muted, fontSize: 13 }, details: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 }, detail: { color: AppColors.muted, fontSize: 13, fontWeight: '600' }, dot: { color: AppColors.line }, pill: { paddingHorizontal: 9, paddingVertical: 5, borderRadius: 99, backgroundColor: AppColors.surfaceMuted }, pillWarm: { backgroundColor: AppColors.amberSoft }, pillGreen: { backgroundColor: AppColors.primarySoft }, pillText: { color: AppColors.ink, fontSize: 11, fontWeight: '800' }, detailRow: { paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: AppColors.line, gap: 3 }, rowLabel: { color: AppColors.muted, fontSize: 13, fontWeight: '700' }, rowValue: { color: AppColors.ink, fontSize: 15, lineHeight: 21, fontWeight: '600' },
});
