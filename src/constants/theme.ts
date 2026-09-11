import { Platform } from 'react-native';

/** Warm neutrals and olive action states deliberately avoid blue/purple UI cues. */
export const AppColors = {
  canvas: '#F7F5EF', surface: '#FFFFFF', surfaceMuted: '#EEEAE0', ink: '#1E2A24', muted: '#687168', line: '#DEDACE',
  primary: '#315C42', primaryPressed: '#254632', primarySoft: '#DDEBDD', amber: '#B56A1B', amberSoft: '#F8E8D1',
  rose: '#A64032', roseSoft: '#F5DDD8', success: '#2B7047',
} as const;

export const Layout = { pagePadding: 20, cardRadius: 20, buttonRadius: 14, maxWidth: 680 } as const;

export const Fonts = Platform.select({
  ios: { sans: 'system-ui', serif: 'ui-serif' }, default: { sans: 'normal', serif: 'serif' },
  web: { sans: 'var(--font-display)', serif: 'var(--font-serif)' },
});
