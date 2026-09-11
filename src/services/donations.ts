import { mockDonations } from '@/data/mock-donations';
import type { Donation, DonationDraft, DonationStatus } from '@/types/domain';

/** In-memory API boundary. Replace these function bodies with HTTP calls later. */
let records = [...mockDonations];
const wait = <T,>(value: T): Promise<T> => new Promise((resolve) => setTimeout(() => resolve(value), 250));
export const donationService = {
  list: () => wait([...records]),
  get: (id: string) => wait(records.find((donation) => donation.id === id)),
  async create(draft: DonationDraft): Promise<Donation> {
    const now = new Date().toISOString();
    const donation: Donation = { id: `VAA-${Math.floor(2100 + Math.random() * 700)}`, donorId: 'current-donor', donorName: 'You', donorType: 'Individual donor', title: draft.title.trim() || 'Untitled food donation', category: draft.category, diet: draft.diet, quantity: draft.quantity || 'Quantity to confirm', estimatedServings: Number(draft.estimatedServings) || 1, preparedAt: draft.preparedAt, storageMethod: draft.storageMethod, pickupAddress: draft.pickupAddress || 'Address to confirm', pickupArea: draft.pickupArea, availableFrom: draft.availableFrom, availableUntil: draft.availableUntil, notes: [draft.notes, draft.contactInstructions].filter(Boolean).join(' · '), images: [], status: 'posted', createdAt: now, updatedAt: now };
    records = [donation, ...records];
    return wait(donation);
  },
  async updateStatus(id: string, status: DonationStatus) {
    records = records.map((donation) => donation.id === id ? { ...donation, status, updatedAt: new Date().toISOString() } : donation);
    return wait(records.find((donation) => donation.id === id));
  },
};
