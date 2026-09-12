import { useEffect, useRef, type PropsWithChildren } from 'react';
import { AccessibilityInfo, Animated, Easing } from 'react-native';

/** A single, reduced-motion-aware entrance used for screen-level hierarchy—not decoration. */
export function ScreenReveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let active = true;
    AccessibilityInfo.isReduceMotionEnabled().then((reduceMotion) => {
      if (!active) return;
      if (reduceMotion) { progress.setValue(1); return; }
      Animated.timing(progress, { toValue: 1, duration: 220, delay, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
    });
    return () => { active = false; };
  }, [delay, progress]);
  return <Animated.View style={{ opacity: progress, transform: [{ translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [8, 0] }) }] }}>{children}</Animated.View>;
}
