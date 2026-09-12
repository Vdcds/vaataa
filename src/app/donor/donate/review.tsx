import { useRouter } from 'expo-router';
import { useState } from 'react';
import { DetailRow } from '@/components/donations/donation-card';
import { DonationFlowProgress } from '@/components/donations/donation-flow-progress';
import { categoryLabels, donorKindLabels } from '@/data/mock-donations';
import { useApp } from '@/context/app-context';
import { Card, PrimaryButton, Screen, SecondaryButton, toast } from '@/ui';

export default function ReviewScreen() {
  const router = useRouter(); const { draft, postDraft } = useApp(); const [loading, setLoading] = useState(false);
  const post = async () => { setLoading(true); try { const donation = await postDraft(); toast.success('Donation posted'); router.replace(`/donor/donate/success?id=${donation.id}` as never); } finally { setLoading(false); } };
  return <Screen title="Review before posting" subtitle="Your selected recipient will receive these details to plan the handoff."><DonationFlowProgress step={6} /><Card variant="outlined" padding="lg"><DetailRow label="Sharing as" value={draft.donorKind ? donorKindLabels[draft.donorKind] : 'Donor'} /><DetailRow label="Recipient" value={draft.destinationName || 'Recipient to confirm'} /><DetailRow label="Food" value={draft.title || 'Food donation'} /><DetailRow label="Type" value={`${categoryLabels[draft.category]} · ${draft.diet === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}`} /><DetailRow label="Estimated portions" value={draft.estimatedServings || '—'} /><DetailRow label="Condition" value={`${draft.preparedAt} · ${draft.storageMethod}`} /><DetailRow label="Pickup" value={`${draft.pickupAddress || 'Address to confirm'}, ${draft.pickupArea}`} /><DetailRow label="Available until" value={draft.availableUntil} /></Card><PrimaryButton label="Post donation" loading={loading} onPress={post} /><SecondaryButton label="Edit pickup details" onPress={() => router.back()} /></Screen>;
}
