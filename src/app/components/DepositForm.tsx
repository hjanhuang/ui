"use client";

import { useState } from "react";

interface DepositFormProps {
  amount: string;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}

export function DepositForm({
  amount,
  setAmount,
  onConfirm,
}: DepositFormProps) {
  const [amountError, setAmountError] = useState("");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Validate amount
    if (value && parseFloat(value) <= 0) {
      setAmountError("Amount must be greater than 0");
    } else if (value && isNaN(parseFloat(value))) {
      setAmountError("Amount must be a valid number");
    } else {
      setAmountError("");
    }

    setAmount(value);
  };

  const handleConfirm = () => {
    // Additional validation before confirming
    if (!amount) {
      setAmountError("Amount is required");
      return;
    }
    if (parseFloat(amount) <= 0) {
      setAmountError("Amount must be greater than 0");
      return;
    }
    if (isNaN(parseFloat(amount))) {
      setAmountError("Amount must be a valid number");
      return;
    }

    setAmountError("");
    onConfirm();
  };

  return (
    <>
      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-gray-600 text-sm mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          min="0"
          step="any"
          className={`w-full py-4 px-6 text-lg border-2 rounded-xl focus:outline-none transition-colors ${
            amountError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
          placeholder="Enter amount"
        />
        {amountError && (
          <p className="text-red-500 text-sm mt-2">{amountError}</p>
        )}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={!!amountError || !amount || parseFloat(amount) <= 0}
        className={`w-auto px-8 py-3 rounded-xl font-medium transition-colors float-right ${
          amountError || !amount || parseFloat(amount) <= 0
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        Confirm
      </button>
      <div className="clear-both"></div>
    </>
  );
}
