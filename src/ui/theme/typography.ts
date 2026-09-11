import type { TextStyle } from 'react-native';
import { colors } from './colors';

/** Existing system fonts keep the first pass fast and consistent across platforms. */
export const typography: Record<'display' | 'heading1' | 'heading2' | 'heading3' | 'body' | 'bodyStrong' | 'label' | 'caption' | 'button', TextStyle> = {
  display: { color: colors.text, fontSize: 38, lineHeight: 44, fontWeight: '800', letterSpacing: -1.2 },
  heading1: { color: colors.text, fontSize: 30, lineHeight: 37, fontWeight: '800', letterSpacing: -0.7 },
  heading2: { color: colors.text, fontSize: 22, lineHeight: 28, fontWeight: '800', letterSpacing: -0.3 },
  heading3: { color: colors.text, fontSize: 18, lineHeight: 24, fontWeight: '800' },
  body: { color: colors.text, fontSize: 16, lineHeight: 23, fontWeight: '400' },
  bodyStrong: { color: colors.text, fontSize: 16, lineHeight: 23, fontWeight: '700' },
  label: { color: colors.text, fontSize: 14, lineHeight: 19, fontWeight: '700' },
  caption: { color: colors.textMuted, fontSize: 12, lineHeight: 17, fontWeight: '600' },
  button: { fontSize: 16, lineHeight: 20, fontWeight: '800' },
};
