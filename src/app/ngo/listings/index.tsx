import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DonationCard } from '@/components/donations/donation-card';
import { Screen } from '@/ui';
import { AppColors } from '@/constants/theme';
import { useApp } from '@/context/app-context';
const filters = ['All nearby', 'Vegetarian', 'Urgent', 'Large groups'] as const;
export default function ListingsScreen() { const router = useRouter(); const { donations } = useApp(); const [filter, setFilter] = useState<(typeof filters)[number]>('All nearby'); const list = useMemo(() => donations.filter((item) => item.status === 'posted').filter((item) => filter !== 'Vegetarian' || item.diet === 'veg').filter((item) => filter !== 'Large groups' || item.estimatedServings >= 30), [donations, filter]); return <Screen eyebrow="Available rescues" title="Find a suitable pickup" subtitle="Filters are lightweight in the MVP so a volunteer can decide quickly."><View style={styles.filters}>{filters.map((item) => <Pressable key={item} onPress={() => setFilter(item)} style={[styles.filter, filter === item && styles.active]}><Text style={[styles.filterText, filter === item && styles.activeText]}>{item}</Text></Pressable>)}</View>{list.map((donation) => <DonationCard key={donation.id} donation={donation} onPress={() => router.push(`/ngo/listings/${donation.id}` as never)} />)}{!list.length && <Text style={{ color: AppColors.muted }}>No available rescues match that filter.</Text>}</Screen>; }
const styles = StyleSheet.create({ filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 }, filter: { paddingHorizontal: 13, paddingVertical: 9, borderRadius: 99, backgroundColor: AppColors.surface, borderColor: AppColors.line, borderWidth: 1 }, active: { backgroundColor: AppColors.primary, borderColor: AppColors.primary }, filterText: { color: AppColors.ink, fontSize: 13, fontWeight: '700' }, activeText: { color: '#fff' }, });
