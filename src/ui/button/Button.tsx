import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, spacing, typography } from '@/ui/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonProps = Omit<PressableProps, 'style' | 'children'> & { label: string; variant?: ButtonVariant; size?: ButtonSize; loading?: boolean; left?: ReactNode; right?: ReactNode; fullWidth?: boolean; style?: StyleProp<ViewStyle> };

const variants: Record<ButtonVariant, { container: ViewStyle; label: { color: string } }> = {
  primary: { container: { backgroundColor: colors.primary }, label: { color: colors.primaryForeground } },
  secondary: { container: { backgroundColor: colors.secondary }, label: { color: colors.secondaryForeground } },
  outline: { container: { backgroundColor: colors.surface, borderColor: colors.borderStrong, borderWidth: 1 }, label: { color: colors.text } },
  ghost: { container: { backgroundColor: 'transparent' }, label: { color: colors.text } },
  danger: { container: { backgroundColor: colors.danger }, label: { color: colors.textInverse } },
};
const sizes: Record<ButtonSize, ViewStyle> = { sm: { minHeight: 44, paddingHorizontal: spacing.md }, md: { minHeight: 48, paddingHorizontal: spacing.lg }, lg: { minHeight: 56, paddingHorizontal: spacing.xl } };
const ripples: Record<ButtonVariant, string> = { primary: colors.rippleInverse, secondary: colors.rippleDark, outline: colors.ripple, ghost: colors.ripple, danger: colors.rippleInverse };

/** A tactile, accessible action primitive without hiding native Pressable behavior. */
export function Button({ label, variant = 'primary', size = 'md', loading, left, right, fullWidth, disabled, style, accessibilityLabel, ...props }: ButtonProps) {
  const inactive = disabled || loading;
  return <Pressable {...props} accessibilityRole="button" accessibilityLabel={accessibilityLabel ?? label} disabled={inactive} android_ripple={{ color: ripples[variant] }} pressRetentionOffset={spacing.lg} hitSlop={size === 'sm' ? spacing.xs : undefined} style={({ pressed }) => [styles.base, sizes[size], variants[variant].container, fullWidth && styles.full, (pressed || inactive) && styles.pressed, style]}>{loading ? <ActivityIndicator color={variants[variant].label.color} /> : <>{left}<Text style={[typography.button, variants[variant].label]}>{label}</Text>{right}</>}</Pressable>;
}
const styles = StyleSheet.create({ base: { borderRadius: radius.md, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: spacing.sm }, full: { alignSelf: 'stretch' }, pressed: { opacity: 0.78 } });
