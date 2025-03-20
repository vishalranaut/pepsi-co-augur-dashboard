import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: number;
  unit?: string;
  trend?: number;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit = '',
  trend,
  className = '',
}) => {
  const formatValue = (val: number): string => {
    if (val >= 1000) {
      return (val / 1000).toFixed(1) + 'k';
    }
    return val.toString();
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md ${className}`}>
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {formatValue(value)}{unit}
        </p>
        {trend !== undefined && (
          <span className={`ml-2 flex items-center text-sm ${
            trend >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {trend >= 0 ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  );
};