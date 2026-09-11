import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { DonationCard } from '@/components/donations/donation-card';
import { Screen } from '@/ui';
import { useApp } from '@/context/app-context';
export default function ActivityScreen() { const router = useRouter(); const { donations } = useApp(); const mine = donations.filter((item) => item.donorId === 'current-donor'); return <Screen eyebrow="Your activity" title="Donation updates" subtitle="Follow each rescue from posting to delivery.">{mine.length ? mine.map((donation) => <DonationCard key={donation.id} donation={donation} onPress={() => router.push(`/donor/activity/${donation.id}` as never)} />) : <Text>No donations have been posted from this mock account.</Text>}</Screen>; }
