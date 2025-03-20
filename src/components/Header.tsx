import React from 'react';
import { BarChart3, Moon, Sun } from 'lucide-react';

export const Header: React.FC = () => {
  const [isDark, setIsDark] = React.useState(() => 
    document.documentElement.classList.contains('dark')
  );

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Augur Dashboard</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Distribution Network Analytics</p>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};