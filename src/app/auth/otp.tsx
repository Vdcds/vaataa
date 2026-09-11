import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import { PrimaryButton, SecondaryButton } from '@/components/ui/buttons';
import { TextField } from '@/components/ui/fields';
import { Screen } from '@/components/ui/screen';

export default function OtpScreen() {
  const router = useRouter(); const [otp, setOtp] = useState('123456');
  return <Screen eyebrow="Mock verification" title="Enter the code" subtitle="Use any six digits. This step is intentionally local-only for now."><TextField label="6-digit code" value={otp} onChangeText={setOtp} keyboardType="numeric" placeholder="123456" /><PrimaryButton label="Verify and continue" onPress={() => router.push('/auth/role' as never)} /><SecondaryButton label="Use a different number" onPress={() => router.back()} /></Screen>;
}
