import { useRouter } from 'expo-router';
import { ChoiceRow, PrimaryButton, Screen, SecondaryButton, TextField } from '@/ui';
import { DonationFlowProgress } from '@/components/donations/donation-flow-progress';
import { PortionStepper } from '@/components/donations/portion-stepper';
import { categoryLabels } from '@/data/mock-donations';
import { useApp } from '@/context/app-context';
import type { FoodCategory } from '@/types/domain';

const categories = (Object.entries(categoryLabels) as [FoodCategory, string][]).map(([value, label]) => ({ value, label }));
export default function PortionsScreen() {
  const router = useRouter(); const { draft, updateDraft } = useApp(); const portions = Number(draft.estimatedServings) || 12;
  const setPortions = (estimatedServings: number) => updateDraft({ estimatedServings: String(estimatedServings), quantity: `${estimatedServings} portions` });
  return <Screen title="What can reach them today?" subtitle={draft.destinationName ? `${draft.destinationName} will use this to plan collection.` : 'Give recipients a clear idea of what is available.'}><DonationFlowProgress step={3} /><TextField label="Food name" value={draft.title} onChangeText={(title) => updateDraft({ title })} placeholder="For example, packed vegetable meals" /><ChoiceRow label="Food type" options={categories} value={draft.category} onChange={(category) => updateDraft({ category })} /><ChoiceRow label="Diet" options={[{ label: 'Vegetarian', value: 'veg' }, { label: 'Non-vegetarian', value: 'non_veg' }]} value={draft.diet} onChange={(diet) => updateDraft({ diet })} /><PortionStepper value={portions} onChange={setPortions} /><PrimaryButton label="Continue to quality details" onPress={() => router.push('/donor/donate/condition' as never)} /><SecondaryButton label="Back" onPress={() => router.back()} /></Screen>;
}
