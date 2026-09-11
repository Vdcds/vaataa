import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AppColors } from '@/constants/theme';
import { AppProvider } from '@/context/app-context';
import { ToastProvider } from '@/ui';

/** The root owns only cross-screen state and navigation chrome. */
export default function RootLayout() {
  return (
    <AppProvider>
      <ToastProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: AppColors.canvas } }} />
      </ToastProvider>
    </AppProvider>
  );
}
