import type { ReactNode } from 'react';
import { Button } from './Button';

type ActionButtonProps = { label: string; onPress: () => void; disabled?: boolean; loading?: boolean; icon?: ReactNode };
/** Semantic convenience actions for screens that want the standard Vaata hierarchy. */
export function PrimaryButton({ label, onPress, disabled, loading, icon }: ActionButtonProps) {
  return <Button label={label} onPress={onPress} disabled={disabled} loading={loading} left={icon} size="lg" fullWidth />;
}
export function SecondaryButton({ label, onPress, disabled }: ActionButtonProps) {
  return <Button label={label} onPress={onPress} disabled={disabled} variant="outline" fullWidth />;
}
