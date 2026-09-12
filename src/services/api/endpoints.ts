/** Route contracts stay central so changing from mock transport to fetch is mechanical. */
export const endpoints = { donations: '/v1/donations', donation: (id: string) => `/v1/donations/${id}`, donationDestinations: '/v1/donation-destinations' } as const;
