import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Screen } from '@/components/ui/screen';
import { AppColors, Layout } from '@/constants/theme';
import { useApp } from '@/context/app-context';
import type { UserRole } from '@/types/domain';
const options: { role: UserRole; title: string; copy: string; glyph: string }[] = [{ role: 'donor', title: 'Donate food', copy: 'Post good surplus food for a nearby rescue.', glyph: '◒' }, { role: 'ngo', title: 'NGO / volunteer', copy: 'Find, verify, collect and deliver food.', glyph: '↗' }];
export default function RoleScreen() {
  const router = useRouter(); const { setRole } = useApp();
  const choose = (role: UserRole) => { setRole(role); router.replace((role === 'donor' ? '/donor/home' : '/ngo/home') as never); };
  return <Screen eyebrow="Your role" title="How will you use Vaata?" subtitle="You can change roles later when an account profile is connected."><View style={styles.options}>{options.map((option) => <Pressable key={option.role} onPress={() => choose(option.role)} style={({ pressed }) => [styles.card, pressed && styles.pressed]}><Text style={styles.glyph}>{option.glyph}</Text><View style={styles.copy}><Text style={styles.title}>{option.title}</Text><Text style={styles.body}>{option.copy}</Text></View><Text style={styles.arrow}>›</Text></Pressable>)}</View></Screen>;
}
const styles = StyleSheet.create({ options: { gap: 12 }, card: { padding: 18, minHeight: 106, borderRadius: Layout.cardRadius, borderColor: AppColors.line, borderWidth: 1, backgroundColor: AppColors.surface, flexDirection: 'row', alignItems: 'center', gap: 14 }, pressed: { opacity: 0.7 }, glyph: { fontSize: 25, color: AppColors.primary, fontWeight: '800' }, copy: { flex: 1, gap: 4 }, title: { color: AppColors.ink, fontSize: 17, fontWeight: '800' }, body: { color: AppColors.muted, fontSize: 14, lineHeight: 20 }, arrow: { color: AppColors.primary, fontSize: 30 }, });
