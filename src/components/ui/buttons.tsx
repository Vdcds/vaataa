import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import { AppColors, Layout } from '@/constants/theme';

type ButtonProps = { label: string; onPress: () => void; disabled?: boolean; loading?: boolean; icon?: ReactNode };
/** Large, explicit actions meet the minimum accessible touch-target requirement. */
export function PrimaryButton({ label, onPress, disabled, loading, icon }: ButtonProps) {
  return <Pressable accessibilityRole="button" disabled={disabled || loading} onPress={onPress} style={({ pressed }) => [styles.primary, (pressed || disabled) && styles.primaryPressed]}>{loading ? <ActivityIndicator color="#fff" /> : <>{icon}<Text style={styles.primaryLabel}>{label}</Text></>}</Pressable>;
}
export function SecondaryButton({ label, onPress, disabled }: ButtonProps) {
  return <Pressable accessibilityRole="button" disabled={disabled} onPress={onPress} style={({ pressed }) => [styles.secondary, (pressed || disabled) && styles.secondaryPressed]}><Text style={styles.secondaryLabel}>{label}</Text></Pressable>;
}
const styles = StyleSheet.create({
  primary: { minHeight: 54, borderRadius: Layout.buttonRadius, backgroundColor: AppColors.primary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, flexDirection: 'row', gap: 8 },
  primaryPressed: { opacity: 0.72, backgroundColor: AppColors.primaryPressed }, primaryLabel: { color: '#fff', fontSize: 16, fontWeight: '800' },
  secondary: { minHeight: 50, borderRadius: Layout.buttonRadius, borderColor: AppColors.line, borderWidth: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 }, secondaryPressed: { backgroundColor: AppColors.surfaceMuted }, secondaryLabel: { color: AppColors.ink, fontSize: 16, fontWeight: '700' },
});
