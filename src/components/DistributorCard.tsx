import React from 'react';
import { type Distributor } from '../types';
import { MapPin, Package, Clock, Star } from 'lucide-react';

interface DistributorCardProps {
  distributor: Distributor;
}

export const DistributorCard: React.FC<DistributorCardProps> = ({ distributor }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{distributor.name}</h2>
          <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{distributor.location}</span>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          distributor.status === 'active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' :
          distributor.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100' :
          'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
        }`}>
          {distributor.status.charAt(0).toUpperCase() + distributor.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Package className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Month</p>
            <p className="font-semibold text-gray-900 dark:text-white">{distributor.lastMonthShipments.toLocaleString()} units</p>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Forecasted</p>
            <p className="font-semibold text-gray-900 dark:text-white">{distributor.forecastedShipments.toLocaleString()} units</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t dark:border-gray-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-1" />
            <span className="font-medium text-gray-900 dark:text-white">{distributor.customerSatisfaction}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {distributor.activeContracts} Active Contracts
          </div>
        </div>
      </div>
    </div>
  );
};