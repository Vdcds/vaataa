import type { PropsWithChildren, ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '@/ui/theme';
type ScreenProps = PropsWithChildren<{ eyebrow?: string; title?: string; subtitle?: string; action?: ReactNode }>;
/** Shared safe-area and readable-width wrapper for Vaata product screens. */
export function Screen({ eyebrow, title, subtitle, action, children }: ScreenProps) { return <SafeAreaView style={styles.safe} edges={['top']}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}><View style={styles.inner}>{(eyebrow || title || subtitle || action) && <View style={styles.header}><View style={styles.heading}>{eyebrow && <Text style={styles.eyebrow}>{eyebrow}</Text>}{title && <Text style={styles.title}>{title}</Text>}{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}</View>{action}</View>}{children}</View></ScrollView></SafeAreaView>; }
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.background }, content: { paddingBottom: spacing['5xl'] }, inner: { width: '100%', maxWidth: 680, alignSelf: 'center', paddingHorizontal: spacing.xl, gap: spacing.lg }, header: { paddingTop: spacing.lg, gap: spacing.sm }, heading: { gap: spacing.xs }, eyebrow: { ...typography.caption, color: colors.primary, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1.2 }, title: typography.heading1, subtitle: { ...typography.body, color: colors.textMuted } });
