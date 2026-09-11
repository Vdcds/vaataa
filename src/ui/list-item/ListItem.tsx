import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type PressableProps } from 'react-native';
import { colors, spacing, typography } from '@/ui/theme';
type ListItemProps = Omit<PressableProps, 'children'> & { title: string; description?: string; leading?: ReactNode; trailing?: ReactNode };
/** Neutral mobile row for details, menus, and settings without product-specific meaning. */
export function ListItem({ title, description, leading, trailing, onPress, ...props }: ListItemProps) { const Inner = <View style={styles.row}>{leading && <View style={styles.leading}>{leading}</View>}<View style={styles.copy}><Text style={typography.bodyStrong}>{title}</Text>{description && <Text style={styles.description}>{description}</Text>}</View>{trailing && <View>{trailing}</View>}</View>; return onPress ? <Pressable {...props} accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>{Inner}</Pressable> : Inner; }
const styles = StyleSheet.create({ pressable: { borderRadius: 6 }, pressed: { opacity: 0.72 }, row: { minHeight: 56, flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.sm }, leading: { minWidth: 28, alignItems: 'center' }, copy: { flex: 1, gap: spacing.xs }, description: { ...typography.caption }, });
