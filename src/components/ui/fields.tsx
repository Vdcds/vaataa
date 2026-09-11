import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AppColors } from '@/constants/theme';

export function TextField({ label, value, onChangeText, placeholder, multiline = false, keyboardType = 'default' }: { label: string; value: string; onChangeText: (value: string) => void; placeholder?: string; multiline?: boolean; keyboardType?: 'default' | 'numeric' | 'phone-pad' }) {
  return <View style={styles.field}><Text style={styles.label}>{label}</Text><TextInput accessibilityLabel={label} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#8B928B" keyboardType={keyboardType} multiline={multiline} style={[styles.input, multiline && styles.multiline]} /></View>;
}
export function ChoiceRow<T extends string>({ label, options, value, onChange }: { label: string; options: readonly { label: string; value: T }[]; value: T; onChange: (value: T) => void }) {
  return <View style={styles.field}><Text style={styles.label}>{label}</Text><View style={styles.choices}>{options.map((option) => <Pressable key={option.value} onPress={() => onChange(option.value)} accessibilityRole="radio" accessibilityState={{ checked: value === option.value }} style={[styles.choice, value === option.value && styles.choiceActive]}><Text style={[styles.choiceLabel, value === option.value && styles.choiceLabelActive]}>{option.label}</Text></Pressable>)}</View></View>;
}
const styles = StyleSheet.create({
  field: { gap: 7 }, label: { color: AppColors.ink, fontSize: 14, fontWeight: '800' }, input: { minHeight: 50, color: AppColors.ink, backgroundColor: AppColors.surface, borderColor: AppColors.line, borderWidth: 1, borderRadius: 12, paddingHorizontal: 14, fontSize: 16 }, multiline: { minHeight: 90, textAlignVertical: 'top', paddingTop: 12 }, choices: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, choice: { borderRadius: 99, borderColor: AppColors.line, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: AppColors.surface }, choiceActive: { backgroundColor: AppColors.primary, borderColor: AppColors.primary }, choiceLabel: { color: AppColors.ink, fontWeight: '700' }, choiceLabelActive: { color: '#fff' },
});
