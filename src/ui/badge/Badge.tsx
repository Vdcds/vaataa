import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, spacing, typography } from '@/ui/theme';
export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
const variants: Record<BadgeVariant, ViewStyle> = { neutral: { backgroundColor: colors.surfaceMuted }, primary: { backgroundColor: colors.primarySoft }, success: { backgroundColor: colors.successSoft }, warning: { backgroundColor: colors.warningSoft }, danger: { backgroundColor: colors.dangerSoft }, outline: { backgroundColor: colors.surface, borderColor: colors.borderStrong, borderWidth: 1 } };
const labels: Record<BadgeVariant, string> = { neutral: colors.text, primary: colors.primary, success: colors.success, warning: colors.warning, danger: colors.danger, outline: colors.text };
export function Badge({ children, variant = 'neutral', style }: PropsWithChildren<{ variant?: BadgeVariant; style?: StyleProp<ViewStyle> }>) { return <View style={[styles.badge, variants[variant], style]}><Text style={[styles.text, { color: labels[variant] }]}>{children}</Text></View>; }
const styles = StyleSheet.create({ badge: { alignSelf: 'flex-start', borderRadius: radius.full, paddingHorizontal: spacing.sm, paddingVertical: spacing.xs }, text: { ...typography.caption, fontWeight: '800' } });
