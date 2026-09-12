import { useRouter } from 'expo-router';
import { ChoiceRow, PrimaryButton, Screen, SecondaryButton, TextField } from '@/ui';
import { DonationFlowProgress } from '@/components/donations/donation-flow-progress';
import { useApp } from '@/context/app-context';
export default function ConditionScreen() {
  const router = useRouter(); const { draft, updateDraft } = useApp();
  return <Screen title="Tell us its condition" subtitle="This helps the recipient make a basic condition check. It is not a food-safety certification."><DonationFlowProgress step={4} /><ChoiceRow label="When was it prepared?" options={[{ label: 'Today', value: 'Today' }, { label: 'Yesterday', value: 'Yesterday' }]} value={draft.preparedAt} onChange={(preparedAt) => updateDraft({ preparedAt })} /><ChoiceRow label="How is it stored?" options={[{ label: 'Room temperature', value: 'Room temperature' }, { label: 'Refrigerated', value: 'Refrigerated' }, { label: 'Sealed packaged', value: 'Sealed packaged food' }]} value={draft.storageMethod} onChange={(storageMethod) => updateDraft({ storageMethod })} /><TextField label="Condition note (optional)" value={draft.notes} onChangeText={(notes) => updateDraft({ notes })} placeholder="Anything a volunteer should know?" multiline /><PrimaryButton label="Continue to pickup" onPress={() => router.push('/donor/donate/pickup' as never)} /><SecondaryButton label="Back" onPress={() => router.back()} /></Screen>;
}
