"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function FundPage() {
  const [activeTab, setActiveTab] = useState("withdraw");
  const [isConfirming, setIsConfirming] = useState(false);
  const [formData, setFormData] = useState({
    recipientAddress: "",
    amount: "",
    gameId: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    setIsConfirming(true);
    // Simulate confirmation process
    setTimeout(() => {
      setIsConfirming(false);
      // Reset form
      setFormData({
        recipientAddress: "",
        amount: "",
        gameId: "",
      });
    }, 2000);
  };

  const isFormValid = () => {
    if (activeTab === "withdraw") {
      return formData.recipientAddress && formData.amount && formData.gameId;
    } else {
      return formData.gameId && formData.amount;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
        {/* Address Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">address</span>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                <Link href={"/"}>Back home</Link>
              </button>
              {/* <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>

              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button> */}
            </div>
          </div>
          <div className="text-sm text-gray-800 font-mono">0x0721...b257</div>
        </div>

        {/* Balance Section */}
        <div className="text-center mb-8">
          <div className="text-gray-600 text-sm mb-2">Balance</div>
          <div className="text-2xl font-bold text-gray-900">
            0.003999873690898627 ETH
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
              activeTab === "withdraw"
                ? "bg-red-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Withdraw
          </button>
          <button
            onClick={() => setActiveTab("fun")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
              activeTab === "fun"
                ? "bg-red-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Fun
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          {activeTab === "withdraw" && (
            <div>
              <label className="block text-gray-600 text-sm mb-2">
                Recipient Address
              </label>
              <input
                type="text"
                value={formData.recipientAddress}
                onChange={(e) =>
                  handleInputChange("recipientAddress", e.target.value)
                }
                className="w-full p-4 bg-gray-50 rounded-xl border-none text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="0x..."
              />
            </div>
          )}

          <div>
            <label className="block text-gray-600 text-sm mb-2">Game ID</label>
            <input
              type="text"
              value={formData.gameId}
              onChange={(e) => handleInputChange("gameId", e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-xl border-none text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter game ID"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Amount</label>
            <input
              type="number"
              step="0.000001"
              value={formData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-xl border-none text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="0.0"
            />
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={!isFormValid() || isConfirming}
          className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
            isFormValid() && !isConfirming
              ? "bg-gray-800 hover:bg-gray-900 shadow-lg"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isConfirming ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
}
