"use client";

import { Copy, LogOut } from "lucide-react";
import { getShortAddress } from "../utils/getShortAddress";

interface HeaderProps {
  address: string;
  onCopy: () => void;
  onLogout: () => void;
}

export function Header({ address, onCopy, onLogout }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex-1">
        <span className="text-gray-600 text-sm">address</span>
        <div className="font-mono text-sm mt-1">{getShortAddress(address)}</div>
      </div>
      <div className="flex gap-2 ml-4">
        <button
          onClick={onCopy}
          className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transform hover:scale-105 transition-all duration-200 cursor-pointer"
          title="Copy address"
        >
          <Copy size={16} />
        </button>
        <button
          onClick={onLogout}
          className="p-2 border-2 border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 hover:shadow-md transform hover:scale-105 transition-all duration-200 cursor-pointer"
          title="Logout"
        >
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
}
