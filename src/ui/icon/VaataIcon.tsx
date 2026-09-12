import { SymbolView } from 'expo-symbols';
import { View } from 'react-native';
import { colors } from '@/ui/theme';

export type VaataIconName = 'share' | 'rescue' | 'food' | 'route' | 'arrow';
const symbols: Record<VaataIconName, Parameters<typeof SymbolView>[0]['name']> = {
  share: { ios: 'hands.sparkles', android: 'volunteer_activism', web: 'volunteer_activism' },
  rescue: { ios: 'person.3', android: 'groups', web: 'groups' },
  food: { ios: 'fork.knife', android: 'restaurant', web: 'restaurant' },
  route: { ios: 'map', android: 'local_dining', web: 'local_dining' },
  arrow: { ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' },
};

/** One platform-native icon family keeps Android, iOS and web controls visually consistent. */
export function VaataIcon({ name, size = 22, color = colors.primary }: { name: VaataIconName; size?: number; color?: string }) {
  return <SymbolView name={symbols[name]} size={size} tintColor={color} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" fallback={<View style={{ width: size, height: size }} />} />;
}
