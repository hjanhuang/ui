"use client";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onTabChange("deposit")}
        className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md ${
          activeTab === "deposit"
            ? "bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600"
            : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800"
        }`}
      >
        Deposit
      </button>
      <button
        onClick={() => onTabChange("withdraw")}
        className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md ${
          activeTab === "withdraw"
            ? "bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-900 hover:border-gray-900"
            : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800"
        }`}
      >
        Withdraw
      </button>
    </div>
  );
}
