import React from 'react';
import { BarChart3 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <BarChart3 className="h-8 w-8 text-blue-600" />
          <div className="ml-3">
            <h1 className="text-2xl font-bold text-gray-900">Augur Dashboard</h1>
            <p className="text-sm text-gray-500">Distribution Network Analytics</p>
          </div>
        </div>
      </div>
    </header>
  );
};