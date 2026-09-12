import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '@/ui';

/** Compact progress marks correspond only to actual steps in the donation flow. */
export function DonationFlowProgress({ step }: { step: number }) { return <View accessibilityRole="progressbar" accessibilityValue={{ min: 1, max: 6, now: step }} style={styles.wrap}><View style={styles.track}>{Array.from({ length: 6 }, (_, index) => <View key={index} style={[styles.segment, index < step && styles.active]} />)}</View><Text style={styles.copy}>Step {step} of 6</Text></View>; }
const styles = StyleSheet.create({ wrap: { gap: spacing.xs }, track: { flexDirection: 'row', gap: spacing.xs }, segment: { flex: 1, height: 4, borderRadius: radius.full, backgroundColor: colors.surfaceMuted }, active: { backgroundColor: colors.primary }, copy: { ...typography.caption, color: colors.textMuted } });
