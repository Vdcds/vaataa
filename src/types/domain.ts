export type UserRole = 'donor' | 'ngo' | 'volunteer';
export type FoodCategory = 'cooked_meal' | 'snacks' | 'bakery' | 'packaged' | 'produce' | 'raw_ingredients' | 'other';
export type FoodDiet = 'veg' | 'non_veg';
export type DonorKind = 'individual' | 'party' | 'organisation' | 'group';
export type DonationStatus = 'draft' | 'posted' | 'under_review' | 'accepted' | 'pickup_started' | 'picked_up' | 'en_route' | 'delivered' | 'cancelled';
export type AssessmentResult = 'passed' | 'review' | 'rejected';
export interface User { id: string; name: string; phone: string; role: UserRole; organizationName?: string; }
export interface Donation {
  id: string; donorId: string; title: string; category: FoodCategory; diet: FoodDiet; quantity: string; estimatedServings: number;
  preparedAt?: string; storageMethod?: string; pickupAddress: string; pickupArea: string; availableFrom: string; availableUntil: string;
  notes?: string; images: string[]; status: DonationStatus; createdAt: string; updatedAt: string; donorName?: string; donorType?: string; destinationId?: string; destinationName?: string;
}
export interface DonationDestination {
  id: string; name: string; organisationType: 'NGO' | 'Community kitchen' | 'Shelter' | 'Distribution point'; area: string; distanceLabel: string;
  accepts: string; availableUntil: string; capacityLabel: string; urgency: 'open' | 'limited';
}
export interface FoodAssessment {
  donationId: string; appearsEdible: boolean; noVisibleSpoilage: boolean; properlyPacked: boolean; safeTimeWindow: boolean;
  quantityVerified: boolean; pickupConditionsAcceptable: boolean; result: AssessmentResult; notes?: string;
}
export interface DonationDraft {
  donorKind: DonorKind | null; destinationId: string | null; destinationName: string; title: string; category: FoodCategory; diet: FoodDiet; quantity: string; estimatedServings: string; preparedAt: string; storageMethod: string;
  notes: string; pickupAddress: string; pickupArea: string; availableFrom: string; availableUntil: string; contactInstructions: string;
}
