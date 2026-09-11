import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';
import { PrimaryButton, Screen, SecondaryButton, TextField } from '@/ui';

/** Mock auth preserves the intended journey while deliberately making no network call. */
export default function PhoneScreen() {
  const router = useRouter(); const [phone, setPhone] = useState('98765 43210'); const [loading, setLoading] = useState(false);
  const sendOtp = () => { setLoading(true); setTimeout(() => { setLoading(false); router.push('/auth/otp' as never); }, 350); };
  return <Screen eyebrow="Sign in" title="Your phone number" subtitle="We’ll use this only to keep rescue updates connected to you."><TextField label="Indian mobile number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholder="98765 43210" /><Text style={{ color: '#687168', fontSize: 13 }}>This prototype does not send an SMS.</Text><PrimaryButton label="Send mock OTP" loading={loading} onPress={sendOtp} /><SecondaryButton label="Back" onPress={() => router.back()} /></Screen>;
}
