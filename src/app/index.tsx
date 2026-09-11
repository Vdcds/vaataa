import { Redirect } from 'expo-router';

/** Keeping the entry route separate makes changing the future auth gate trivial. */
export default function IndexRoute() {
  return <Redirect href="/auth/welcome" />;
}
