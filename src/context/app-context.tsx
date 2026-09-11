import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { emptyDraft } from '@/data/mock-donations';
import { donationService } from '@/services/donations';
import type { Donation, DonationDraft, DonationStatus, FoodAssessment, UserRole } from '@/types/domain';

type AppContextValue = { role: UserRole | null; setRole: (role: UserRole) => void; donations: Donation[]; draft: DonationDraft; updateDraft: (patch: Partial<DonationDraft>) => void; resetDraft: () => void; postDraft: () => Promise<Donation>; updateDonationStatus: (id: string, status: DonationStatus) => Promise<void>; assessment: FoodAssessment | null; saveAssessment: (assessment: FoodAssessment) => void; };
const AppContext = createContext<AppContextValue | null>(null);

/** Local product state for the mock. Data access remains behind the service boundary. */
export function AppProvider({ children }: PropsWithChildren) {
  const [role, setRole] = useState<UserRole | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [draft, setDraft] = useState<DonationDraft>(emptyDraft);
  const [assessment, setAssessment] = useState<FoodAssessment | null>(null);
  useEffect(() => { donationService.list().then(setDonations); }, []);
  const value = useMemo<AppContextValue>(() => ({
    role, setRole, donations, draft,
    updateDraft: (patch) => setDraft((current) => ({ ...current, ...patch })), resetDraft: () => setDraft(emptyDraft),
    async postDraft() { const donation = await donationService.create(draft); setDonations((current) => [donation, ...current]); return donation; },
    async updateDonationStatus(id, status) { const updated = await donationService.updateStatus(id, status); if (updated) setDonations((current) => current.map((item) => item.id === id ? updated : item)); },
    assessment, saveAssessment: setAssessment,
  }), [assessment, donations, draft, role]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp() { const context = useContext(AppContext); if (!context) throw new Error('useApp must be used inside AppProvider'); return context; }
