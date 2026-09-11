import { createContext, useContext, type PropsWithChildren, type ReactNode } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadows, spacing, typography } from '@/ui/theme';
type DialogContextValue = { open: boolean; onOpenChange: (open: boolean) => void };
const DialogContext = createContext<DialogContextValue | null>(null);
export function Dialog({ open, onOpenChange, children }: PropsWithChildren<DialogContextValue>) { return <DialogContext.Provider value={{ open, onOpenChange }}>{children}</DialogContext.Provider>; }
export function DialogTrigger({ children }: { children: ReactNode }) { const context = useDialogContext(); return <Pressable accessibilityRole="button" onPress={() => context.onOpenChange(true)}>{children}</Pressable>; }
export function DialogContent({ children, dismissible = true }: PropsWithChildren<{ dismissible?: boolean }>) { const { open, onOpenChange } = useDialogContext(); return <Modal transparent visible={open} animationType="fade" onRequestClose={() => dismissible && onOpenChange(false)}><View style={styles.overlay}><Pressable accessibilityLabel="Dismiss dialog" style={StyleSheet.absoluteFill} onPress={() => dismissible && onOpenChange(false)} /><View style={styles.content}>{children}</View></View></Modal>; }
export function DialogTitle({ children }: PropsWithChildren) { return <Text style={typography.heading2}>{children}</Text>; }
export function DialogDescription({ children }: PropsWithChildren) { return <Text style={styles.description}>{children}</Text>; }
export function DialogFooter({ children }: PropsWithChildren) { return <View style={styles.footer}>{children}</View>; }
function useDialogContext() { const context = useContext(DialogContext); if (!context) throw new Error('Dialog subcomponents must be inside Dialog'); return context; }
const styles = StyleSheet.create({ overlay: { flex: 1, padding: spacing.xl, justifyContent: 'center', backgroundColor: colors.overlay }, content: { borderRadius: radius.lg, padding: spacing.xl, gap: spacing.md, backgroundColor: colors.surfaceRaised, ...shadows.lg }, description: { ...typography.body, color: colors.textMuted }, footer: { flexDirection: 'row', justifyContent: 'flex-end', gap: spacing.sm, marginTop: spacing.sm } });
