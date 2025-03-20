export interface Distributor {
  id: string;
  name: string;
  lastMonthShipments: number;
  forecastedShipments: number;
  ytdAverageShipments: number;
  reliability: number;
  onTimeDeliveryRate: number;
  customerSatisfaction: number;
  activeContracts: number;
  location: string;
  status: 'active' | 'inactive' | 'pending';
}

export const mockDistributors: Distributor[] = [
  {
    id: '1',
    name: 'Global Logistics Co.',
    lastMonthShipments: 1250,
    forecastedShipments: 1400,
    ytdAverageShipments: 1180,
    reliability: 98,
    onTimeDeliveryRate: 96.5,
    customerSatisfaction: 4.8,
    activeContracts: 15,
    location: 'New York, USA',
    status: 'active'
  },
  {
    id: '2',
    name: 'FastTrack Distribution',
    lastMonthShipments: 980,
    forecastedShipments: 1100,
    ytdAverageShipments: 950,
    reliability: 95,
    onTimeDeliveryRate: 94.2,
    customerSatisfaction: 4.6,
    activeContracts: 12,
    location: 'Los Angeles, USA',
    status: 'active'
  },
  {
    id: '3',
    name: 'EuroFreight Solutions',
    lastMonthShipments: 1500,
    forecastedShipments: 1600,
    ytdAverageShipments: 1450,
    reliability: 97,
    onTimeDeliveryRate: 95.8,
    customerSatisfaction: 4.7,
    activeContracts: 18,
    location: 'Berlin, Germany',
    status: 'active'
  },
  {
    id: '4',
    name: 'Pacific Route Ltd.',
    lastMonthShipments: 850,
    forecastedShipments: 900,
    ytdAverageShipments: 820,
    reliability: 94,
    onTimeDeliveryRate: 93.5,
    customerSatisfaction: 4.5,
    activeContracts: 10,
    location: 'Singapore',
    status: 'pending'
  }
];