import { StyleSheet, Text, View } from 'react-native';
import { AppColors } from '@/constants/theme';
import type { DonationStatus } from '@/types/domain';
const steps: { label: string; status: DonationStatus }[] = [{ label: 'Accepted', status: 'accepted' }, { label: 'Quality check', status: 'under_review' }, { label: 'Collected', status: 'picked_up' }, { label: 'En route', status: 'en_route' }, { label: 'Delivered', status: 'delivered' }];
const order: DonationStatus[] = ['posted', 'accepted', 'under_review', 'pickup_started', 'picked_up', 'en_route', 'delivered'];
/** A status-derived tracker works with both mock state and a later delivery API. */
export function ProgressSteps({ status }: { status: DonationStatus }) {
  const position = order.indexOf(status);
  return <View style={styles.wrap}>{steps.map((step, index) => <View key={step.label} style={styles.step}><View style={[styles.mark, position >= order.indexOf(step.status) && styles.markDone]}><Text style={styles.number}>{position >= order.indexOf(step.status) ? '✓' : index + 1}</Text></View><Text style={[styles.label, position >= order.indexOf(step.status) && styles.labelDone]}>{step.label}</Text>{index < steps.length - 1 && <View style={[styles.line, position > order.indexOf(step.status) && styles.lineDone]} />}</View>)}</View>;
}
const styles = StyleSheet.create({ wrap: { flexDirection: 'row', justifyContent: 'space-between', gap: 3 }, step: { flex: 1, alignItems: 'center', gap: 7, position: 'relative' }, mark: { width: 27, height: 27, borderRadius: 14, backgroundColor: AppColors.surfaceMuted, alignItems: 'center', justifyContent: 'center', zIndex: 1 }, markDone: { backgroundColor: AppColors.primary }, number: { color: AppColors.ink, fontSize: 12, fontWeight: '800' }, label: { color: AppColors.muted, fontSize: 10, fontWeight: '700', textAlign: 'center' }, labelDone: { color: AppColors.primary }, line: { position: 'absolute', height: 2, backgroundColor: AppColors.surfaceMuted, width: '100%', top: 13, left: '50%' }, lineDone: { backgroundColor: AppColors.primary }, });
