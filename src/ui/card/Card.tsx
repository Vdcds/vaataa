import type { PropsWithChildren } from 'react';
import { View, type StyleProp, type ViewProps, type ViewStyle } from 'react-native';
import { colors, radius, shadows, spacing } from '@/ui/theme';
export type CardVariant = 'flat' | 'outlined' | 'raised';
type CardProps = PropsWithChildren<ViewProps & { variant?: CardVariant; padding?: keyof typeof spacing; style?: StyleProp<ViewStyle> }>;
const variants: Record<CardVariant, ViewStyle> = { flat: { backgroundColor: colors.surface }, outlined: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border }, raised: { backgroundColor: colors.surfaceRaised, ...shadows.sm } };
/** Deliberately layout-agnostic surface container for feature compositions. */
export function Card({ variant = 'flat', padding = 'lg', style, children, ...props }: CardProps) { return <View {...props} style={[{ borderRadius: radius.lg, padding: spacing[padding] }, variants[variant], style]}>{children}</View>; }
