import { mockDonationDestinations, mockDonations } from '@/data/mock-donations';
import { endpoints } from '@/services/api/endpoints';
import { mockApi } from '@/services/api/mock-api';
import type { Donation, DonationDestination, DonationDraft, DonationStatus } from '@/types/domain';

let records = [...mockDonations];

/**
 * Donation endpoint contract. Replace only `mockApi` with the authenticated HTTP
 * client later; callers and endpoint paths remain unchanged.
 */
export const donationService = {
  list: () => mockApi.get<Donation[]>(endpoints.donations, () => [...records]),
  get: (id: string) => mockApi.get<Donation | undefined>(endpoints.donation(id), () => records.find((donation) => donation.id === id)),
  listDestinations: () => mockApi.get<DonationDestination[]>(endpoints.donationDestinations, () => [...mockDonationDestinations]),
  create(draft: DonationDraft) {
    const now = new Date().toISOString();
    const donorType = draft.donorKind ? { individual: 'Individual donor', party: 'Party or event', organisation: 'Organisation', group: 'Community group' }[draft.donorKind] : 'Donor';
    const donation: Donation = { id: `VAA-${Math.floor(2100 + Math.random() * 700)}`, donorId: 'current-donor', donorName: 'You', donorType, destinationId: draft.destinationId ?? undefined, destinationName: draft.destinationName || undefined, title: draft.title.trim() || 'Food donation', category: draft.category, diet: draft.diet, quantity: draft.quantity || 'Quantity to confirm', estimatedServings: Number(draft.estimatedServings) || 1, preparedAt: draft.preparedAt, storageMethod: draft.storageMethod, pickupAddress: draft.pickupAddress || 'Address to confirm', pickupArea: draft.pickupArea, availableFrom: draft.availableFrom, availableUntil: draft.availableUntil, notes: [draft.notes, draft.contactInstructions].filter(Boolean).join(' · '), images: [], status: 'posted', createdAt: now, updatedAt: now };
    return mockApi.post<Donation>(endpoints.donations, draft, () => { records = [donation, ...records]; return donation; });
  },
  updateStatus(id: string, status: DonationStatus) {
    return mockApi.patch<Donation | undefined>(endpoints.donation(id), { status }, () => { records = records.map((donation) => donation.id === id ? { ...donation, status, updatedAt: new Date().toISOString() } : donation); return records.find((donation) => donation.id === id); });
  },
};
