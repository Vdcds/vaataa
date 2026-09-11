import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { DetailRow, StatusPill } from '@/components/donations/donation-card';
import { ProgressSteps } from '@/components/delivery/progress-steps';
import { Screen, SecondaryButton } from '@/ui';
import { AppColors, Layout } from '@/constants/theme';
import { useApp } from '@/context/app-context';
export default function ActivityDetailScreen() { const router = useRouter(); const { id } = useLocalSearchParams<{ id: string }>(); const { donations } = useApp(); const donation = donations.find((item) => item.id === id); if (!donation) return <Screen title="Loading donation"><Text>Finding your donation…</Text></Screen>; return <Screen eyebrow={donation.id} title={donation.title} subtitle={`${donation.estimatedServings} meals · ${donation.pickupArea}`} action={<StatusPill status={donation.status} />}><View style={{ backgroundColor: AppColors.surface, borderRadius: Layout.cardRadius, padding: 18, gap: 20 }}><ProgressSteps status={donation.status} /><DetailRow label="Pickup point" value={donation.pickupAddress} /><DetailRow label="Volunteer / organisation" value={donation.status === 'posted' ? 'Waiting for acceptance' : 'Saksham Community Network'} /></View><SecondaryButton label="Back to home" onPress={() => router.replace('/donor/home' as never)} /></Screen>; }
