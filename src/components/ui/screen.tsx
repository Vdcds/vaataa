import type { PropsWithChildren, ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors, Layout } from '@/constants/theme';

type ScreenProps = PropsWithChildren<{ eyebrow?: string; title?: string; subtitle?: string; action?: ReactNode }>;

/** Shared safe-area and readable-width wrapper for every mobile screen. */
export function Screen({ eyebrow, title, subtitle, action, children }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          {(eyebrow || title || subtitle || action) && <View style={styles.header}>
            <View style={styles.heading}>{eyebrow && <Text style={styles.eyebrow}>{eyebrow}</Text>}{title && <Text style={styles.title}>{title}</Text>}{subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}</View>
            {action}
          </View>}
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: AppColors.canvas }, content: { paddingBottom: 40 },
  inner: { width: '100%', maxWidth: Layout.maxWidth, alignSelf: 'center', paddingHorizontal: Layout.pagePadding, gap: 18 },
  header: { paddingTop: 16, gap: 10 }, heading: { gap: 5 }, eyebrow: { color: AppColors.primary, fontWeight: '800', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.2 },
  title: { color: AppColors.ink, fontSize: 31, fontWeight: '800', letterSpacing: -0.8 }, subtitle: { color: AppColors.muted, fontSize: 16, lineHeight: 23 },
});
