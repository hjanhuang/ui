"use client";

import { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { getShortAddress } from "../utils/getShortAddress";

interface WithdrawFormProps {
  recipient: string;
  setRecipient: (recipient: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}

export function WithdrawForm({
  recipient,
  setRecipient,
  amount,
  setAmount,
  onConfirm,
}: WithdrawFormProps) {
  const { address } = useAccount();
  const [recipientError, setRecipientError] = useState("");

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only validate if value is not empty
    if (value && !value.startsWith("0x")) {
      setRecipientError("Recipient address must start with 0x");
    } else {
      setRecipientError("");
    }

    setRecipient(value);
  };

  const handleConfirm = () => {
    // Use current user's address if recipient is empty
    const finalRecipient = recipient || address;

    // Only validate if recipient is provided
    if (recipient && !recipient.startsWith("0x")) {
      setRecipientError("Recipient address must start with 0x");
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }
    setRecipientError("");
    onConfirm();
  };

  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-600 text-sm mb-2">
          Recipient address{" "}
          <span className="text-gray-400">
            (optional - defaults to your address)
          </span>
        </label>
        <input
          type="text"
          value={recipient}
          onChange={handleRecipientChange}
          className={`w-full py-4 px-6 text-lg border-2 rounded-xl focus:outline-none transition-colors ${
            recipientError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
          placeholder="0x... (leave empty to withdraw to yourself)"
        />
        {recipientError && (
          <p className="text-red-500 text-sm mt-2">{recipientError}</p>
        )}
        {!recipient && address && (
          <p className="text-gray-500 text-sm mt-2">
            Will withdraw to: {getShortAddress(address)}
          </p>
        )}
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-gray-600 text-sm mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full py-4 px-6 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Enter amount"
        />
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={!!recipientError || !amount || parseFloat(amount) <= 0}
        className={`w-auto px-8 py-3 rounded-xl font-medium transition-colors float-right ${
          recipientError || !amount || parseFloat(amount) <= 0
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
