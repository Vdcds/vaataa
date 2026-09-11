import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { DetailRow } from '@/components/donations/donation-card';
import { PrimaryButton, Screen, SecondaryButton } from '@/ui';
import { categoryLabels } from '@/data/mock-donations';
import { AppColors, Layout } from '@/constants/theme';
import { useApp } from '@/context/app-context';
export default function ReviewScreen() {
  const router = useRouter(); const { draft, postDraft } = useApp(); const [loading, setLoading] = useState(false);
  const post = async () => { setLoading(true); const donation = await postDraft(); router.replace(`/donor/donate/success?id=${donation.id}` as never); };
  return <Screen eyebrow="Donation · 4 of 4" title="Ready to post?" subtitle="Please check these details. Volunteers will see this exact information."><View style={{ backgroundColor: AppColors.surface, borderRadius: Layout.cardRadius, borderColor: AppColors.line, borderWidth: 1, paddingHorizontal: 16 }}><DetailRow label="Food" value={draft.title || 'Untitled food donation'} /><DetailRow label="Type" value={`${categoryLabels[draft.category]} · ${draft.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}`} /><DetailRow label="Quantity / meals" value={`${draft.quantity || 'To confirm'} · ${draft.estimatedServings || '—'} servings`} /><DetailRow label="Condition" value={`${draft.preparedAt} · ${draft.storageMethod}`} /><DetailRow label="Pickup" value={`${draft.pickupAddress || 'Address to confirm'}, ${draft.pickupArea}`} /><DetailRow label="Deadline" value={draft.availableUntil} /></View><PrimaryButton label="Post donation" loading={loading} onPress={post} /><SecondaryButton label="Edit pickup details" onPress={() => router.back()} /></Screen>;
}
