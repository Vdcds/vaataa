import { StyleSheet, View, type ViewStyle } from 'react-native';
import { colors, radius } from '@/ui/theme';
export function Skeleton({ width = '100%', height = 14, circle = false, style }: { width?: ViewStyle['width']; height?: number; circle?: boolean; style?: ViewStyle }) { return <View accessibilityElementsHidden style={[styles.base, { width, height, borderRadius: circle ? height / 2 : radius.sm }, style]} />; }
const styles = StyleSheet.create({ base: { backgroundColor: colors.skeleton } });
