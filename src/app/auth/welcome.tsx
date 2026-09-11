import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { PrimaryButton, Screen, SecondaryButton } from '@/ui';
import { AppColors } from '@/constants/theme';

export default function WelcomeScreen() {
  const router = useRouter();
  return <Screen><View style={styles.hero}><View style={styles.mark}><Text style={styles.markText}>V</Text></View><Text style={styles.kicker}>Pune’s food rescue network</Text><Text style={styles.title}>Good food{`\n`}deserves a next stop.</Text><Text style={styles.copy}>Vaata helps surplus food reach people and communities who can use it.</Text></View><View style={styles.footer}><PrimaryButton label="Get started" onPress={() => router.push('/auth/phone' as never)} /><SecondaryButton label="View UI system" onPress={() => router.push('/ui-showcase' as never)} /><Text style={styles.note}>A working prototype with simulated sign-in and delivery updates.</Text></View></Screen>;
}
const styles = StyleSheet.create({ hero: { flex: 1, minHeight: 520, justifyContent: 'center', gap: 17 }, mark: { height: 74, width: 74, borderRadius: 26, alignItems: 'center', justifyContent: 'center', backgroundColor: AppColors.primary }, markText: { color: '#fff', fontSize: 36, fontWeight: '900', fontStyle: 'italic' }, kicker: { color: AppColors.primary, fontSize: 13, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1.1 }, title: { color: AppColors.ink, fontSize: 42, lineHeight: 47, letterSpacing: -1.8, fontWeight: '900' }, copy: { color: AppColors.muted, fontSize: 18, lineHeight: 27, maxWidth: 360 }, footer: { gap: 13 }, note: { color: AppColors.muted, fontSize: 12, lineHeight: 17, textAlign: 'center' }, });
