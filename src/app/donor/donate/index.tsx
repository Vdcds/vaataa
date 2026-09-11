import { useRouter } from 'expo-router';
import { ChoiceRow, PrimaryButton, Screen, SecondaryButton, TextField } from '@/ui';
import { categoryLabels } from '@/data/mock-donations';
import { useApp } from '@/context/app-context';
import type { FoodCategory } from '@/types/domain';
const categories = (Object.entries(categoryLabels) as [FoodCategory, string][]).map(([value, label]) => ({ value, label }));
export default function FoodDetailsScreen() {
  const router = useRouter(); const { draft, updateDraft } = useApp();
  return <Screen eyebrow="Donation · 1 of 4" title="What food can be rescued?" subtitle="A short, accurate description helps volunteers decide quickly."><TextField label="Food title" value={draft.title} onChangeText={(title) => updateDraft({ title })} placeholder="e.g. Packed vegetable meals" /><ChoiceRow label="Food category" options={categories} value={draft.category} onChange={(category) => updateDraft({ category })} /><ChoiceRow label="Diet" options={[{ label: 'Vegetarian', value: 'veg' }, { label: 'Non-vegetarian', value: 'non_veg' }]} value={draft.diet} onChange={(diet) => updateDraft({ diet })} /><TextField label="Quantity" value={draft.quantity} onChangeText={(quantity) => updateDraft({ quantity })} placeholder="e.g. 35 meal boxes" /><TextField label="Approximate servings" value={draft.estimatedServings} onChangeText={(estimatedServings) => updateDraft({ estimatedServings })} placeholder="e.g. 35" keyboardType="numeric" /><PrimaryButton label="Continue to condition" onPress={() => router.push('/donor/donate/condition' as never)} /><SecondaryButton label="Save and exit" onPress={() => router.replace('/donor/home' as never)} /></Screen>;
}
