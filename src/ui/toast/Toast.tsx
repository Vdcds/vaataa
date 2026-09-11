import { createContext, useCallback, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadows, spacing, typography } from '@/ui/theme';
export type ToastKind = 'success' | 'error' | 'warning' | 'info';
type ToastMessage = { id: number; message: string; kind: ToastKind };
type ToastContextValue = { show: (message: string, kind?: ToastKind) => void };
const ToastContext = createContext<ToastContextValue | null>(null);
let showGlobal: ToastContextValue['show'] | null = null;
/** Imperative convenience API for mutations outside a component render. */
export const toast = { success: (message: string) => showGlobal?.(message, 'success'), error: (message: string) => showGlobal?.(message, 'error'), warning: (message: string) => showGlobal?.(message, 'warning'), info: (message: string) => showGlobal?.(message, 'info') };
const tone: Record<ToastKind, string> = { success: colors.success, error: colors.danger, warning: colors.warning, info: colors.primary };
export function ToastProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<ToastMessage[]>([]);
  const show = useCallback((message: string, kind: ToastKind = 'info') => { const item = { id: Date.now(), message, kind }; setItems((current) => [...current, item]); setTimeout(() => setItems((current) => current.filter(({ id }) => id !== item.id)), 3500); }, []);
  useEffect(() => { showGlobal = show; return () => { showGlobal = null; }; }, [show]);
  const context = useMemo(() => ({ show }), [show]);
  return <ToastContext.Provider value={context}>{children}<View pointerEvents="box-none" style={styles.layer}>{items.map((item) => <Pressable accessibilityRole="alert" key={item.id} onPress={() => setItems((current) => current.filter(({ id }) => id !== item.id))} style={[styles.toast, { borderLeftColor: tone[item.kind] }]}><Text style={styles.message}>{item.message}</Text><Text style={styles.dismiss}>×</Text></Pressable>)}</View></ToastContext.Provider>;
}
export function useToast() { const context = useContext(ToastContext); if (!context) throw new Error('useToast must be used inside ToastProvider'); return context; }
const styles = StyleSheet.create({ layer: { position: 'absolute', top: spacing['4xl'], left: spacing.xl, right: spacing.xl, gap: spacing.sm }, toast: { minHeight: 52, paddingVertical: spacing.md, paddingHorizontal: spacing.lg, borderLeftWidth: 4, borderRadius: radius.md, backgroundColor: colors.surfaceRaised, ...shadows.md, flexDirection: 'row', gap: spacing.md, alignItems: 'center' }, message: { ...typography.bodyStrong, flex: 1 }, dismiss: { color: colors.textMuted, fontSize: 22 } });
