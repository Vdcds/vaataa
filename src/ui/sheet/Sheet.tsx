import type { PropsWithChildren } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, radius, shadows, spacing } from '@/ui/theme';
type SheetProps = PropsWithChildren<{ open: boolean; onOpenChange: (open: boolean) => void }>;
/** Lightweight modal bottom sheet for finite selection and confirmation tasks. */
export function Sheet({ open, onOpenChange, children }: SheetProps) { return <Modal transparent visible={open} animationType="slide" onRequestClose={() => onOpenChange(false)}><View style={styles.overlay}><Pressable style={StyleSheet.absoluteFill} accessibilityLabel="Dismiss sheet" onPress={() => onOpenChange(false)} /><View style={styles.sheet}><View style={styles.handle} />{children}</View></View></Modal>; }
const styles = StyleSheet.create({ overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: colors.overlay }, sheet: { minHeight: 180, padding: spacing.xl, paddingBottom: spacing['3xl'], gap: spacing.lg, borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl, backgroundColor: colors.surfaceRaised, ...shadows.lg }, handle: { alignSelf: 'center', width: 36, height: 4, borderRadius: radius.full, backgroundColor: colors.borderStrong } });
