import type { ReactNode } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';
import { colors, radius, spacing, typography } from '@/ui/theme';
type InputProps = TextInputProps & { label?: string; helperText?: string; errorText?: string; leading?: ReactNode; trailing?: ReactNode };
/** Form field wrapper keeps focus, error, helper and disabled treatment consistent. */
export function Input({ label, helperText, errorText, leading, trailing, editable = true, onFocus, onBlur, style, ...props }: InputProps) {
  const [focused, setFocused] = useState(false); const invalid = Boolean(errorText);
  return <View style={styles.field}>{label && <Text style={typography.label}>{label}</Text>}<View style={[styles.control, focused && styles.focused, invalid && styles.invalid, !editable && styles.disabled]}>{leading}<TextInput {...props} editable={editable} placeholderTextColor={colors.textSubtle} onFocus={(event) => { setFocused(true); onFocus?.(event); }} onBlur={(event) => { setFocused(false); onBlur?.(event); }} style={[styles.input, style]} />{trailing}</View>{errorText ? <Text style={styles.error}>{errorText}</Text> : helperText ? <Text style={typography.caption}>{helperText}</Text> : null}</View>;
}
const styles = StyleSheet.create({ field: { gap: spacing.xs }, control: { minHeight: 48, flexDirection: 'row', alignItems: 'center', gap: spacing.sm, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, paddingHorizontal: spacing.md }, focused: { borderColor: colors.primary, borderWidth: 2, paddingHorizontal: spacing.sm + 2 }, invalid: { borderColor: colors.danger }, disabled: { backgroundColor: colors.surfaceMuted }, input: { flex: 1, minHeight: 46, color: colors.text, fontSize: 16, padding: 0 }, error: { ...typography.caption, color: colors.danger } });
