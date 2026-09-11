/** Legacy aliases keep feature code stable while all values come from the UI token layer. */
import { colors, radius, spacing } from '@/ui/theme';

export const AppColors = {
  canvas: colors.background,
  surface: colors.surface,
  surfaceMuted: colors.surfaceMuted,
  ink: colors.text,
  muted: colors.textMuted,
  line: colors.border,
  primary: colors.primary,
  primaryPressed: colors.primaryPressed,
  primarySoft: colors.primarySoft,
  amber: colors.warning,
  amberSoft: colors.warningSoft,
  rose: colors.danger,
  roseSoft: colors.dangerSoft,
  success: colors.success,
} as const;

export const Layout = { pagePadding: spacing.xl, cardRadius: radius.lg, buttonRadius: radius.md, maxWidth: 680 } as const;
