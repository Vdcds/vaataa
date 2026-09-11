import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, typography } from '@/ui/theme';
import { Input } from '@/ui/input';

/** Standard text field plus chip-choice helper for short mobile forms. */
export function TextField({ label, value, onChangeText, placeholder, multiline = false, keyboardType = 'default' }: { label: string; value: string; onChangeText: (value: string) => void; placeholder?: string; multiline?: boolean; keyboardType?: 'default' | 'numeric' | 'phone-pad' }) {
  return <Input label={label} value={value} onChangeText={onChangeText} placeholder={placeholder} keyboardType={keyboardType} multiline={multiline} accessibilityLabel={label} style={multiline ? styles.multiline : undefined} />;
}
export function ChoiceRow<T extends string>({ label, options, value, onChange }: { label: string; options: readonly { label: string; value: T }[]; value: T; onChange: (value: T) => void }) {
  return <View style={styles.field}><Text style={styles.label}>{label}</Text><View style={styles.choices}>{options.map((option) => <Pressable key={option.value} onPress={() => onChange(option.value)} accessibilityRole="radio" accessibilityState={{ checked: value === option.value }} style={[styles.choice, value === option.value && styles.choiceActive]}><Text style={[styles.choiceLabel, value === option.value && styles.choiceLabelActive]}>{option.label}</Text></Pressable>)}</View></View>;
}
const styles = StyleSheet.create({ field: { gap: spacing.sm }, label: typography.label, multiline: { minHeight: 90, textAlignVertical: 'top', paddingTop: spacing.md }, choices: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }, choice: { borderRadius: radius.full, borderColor: colors.border, borderWidth: 1, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, backgroundColor: colors.surface }, choiceActive: { backgroundColor: colors.primary, borderColor: colors.primary }, choiceLabel: { ...typography.label, fontSize: 13 }, choiceLabelActive: { color: colors.textInverse } });
