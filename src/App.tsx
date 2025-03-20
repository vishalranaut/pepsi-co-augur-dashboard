import React from 'react';
import { Header } from './components/Header';
import { MetricCard } from './components/MetricCard';
import { DistributorCard } from './components/DistributorCard';
import { mockDistributors } from './types';

function App() {
  const totalShipments = mockDistributors.reduce((sum, d) => sum + d.lastMonthShipments, 0);
  const avgReliability = mockDistributors.reduce((sum, d) => sum + d.reliability, 0) / mockDistributors.length;
  const totalForecasted = mockDistributors.reduce((sum, d) => sum + d.forecastedShipments, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Shipments Last Month"
            value={totalShipments}
            unit=""
            trend={12}
          />
          <MetricCard
            title="Network Reliability"
            value={avgReliability}
            unit="%"
            trend={2.5}
          />
          <MetricCard
            title="Total Forecasted"
            value={totalForecasted}
            unit=""
            trend={8}
          />
          <MetricCard
            title="Active Distributors"
            value={mockDistributors.length}
            trend={0}
          />
        </div>

        {/* Distributors Grid */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Distributor Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDistributors.map((distributor) => (
            <DistributorCard key={distributor.id} distributor={distributor} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;