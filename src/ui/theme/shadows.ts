import { Platform, type ViewStyle } from 'react-native';

/** Native shadow tokens use elevation only as an Android fallback for raised layers. */
const nativeShadow = (opacity: number, radius: number, offsetY: number, elevation: number): ViewStyle => ({
  shadowColor: '#17221B', shadowOpacity: opacity, shadowRadius: radius, shadowOffset: { width: 0, height: offsetY }, elevation: Platform.OS === 'android' ? elevation : undefined,
});
export const shadows = { none: {}, sm: nativeShadow(0.07, 5, 2, 2), md: nativeShadow(0.11, 12, 5, 5), lg: nativeShadow(0.16, 24, 10, 10) } as const;
