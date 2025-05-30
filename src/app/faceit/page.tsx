"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { axiosRequest } from "../hooks/axiosUtils";
import { getShortAddress } from "../utils/getShortAddress";
import { Copy } from "lucide-react";
import Balance from "../components/balance";

export default function FundPage() {
    const { address } = useAccount();
    const [activeTab, setActiveTab] = useState("withdraw");
    const [isConfirming, setIsConfirming] = useState(false);
    const [formData, setFormData] = useState({
        recipientAddress: "",
        amount: "",
        gameId: "",
    });
    // State for register game
    const [gameForm, setGameForm] = useState({
        gameName: "",
        description: "",
    });
    const [isRegisteringGame, setIsRegisteringGame] = useState(false);
    const [registerGameResult, setRegisterGameResult] = useState<string | null>(null);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const handleGameInputChange = (field: string, value: string) => {
        setGameForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleConfirm = () => {
        setIsConfirming(true);
        setTimeout(() => {
            setIsConfirming(false);
            setFormData({
                recipientAddress: "",
                amount: "",
                gameId: "",
            });
        }, 2000);
    };

    const handleRegisterGame = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsRegisteringGame(true);
        setRegisterGameResult(null);
        // Giả lập gọi contract trả về id
        const idGame = Math.floor(Math.random() * 1000000).toString();
        const host = address || "";
        const { gameName, description } = gameForm;
        try {
            const res = await axiosRequest({
                url: "http://localhost:8000/game/register",
                method: "POST",
                data: { idGame, host, gameName, description } as any,
            });
            if (res && res.status === 200) {
                setRegisterGameResult("success");
                setGameForm({ gameName: "", description: "" });
            } else {
                setRegisterGameResult("error");
            }
        } catch (e) {
            setRegisterGameResult("error");
        }
        setIsRegisteringGame(false);
    };

    const isFormValid = () => {
        if (activeTab === "withdraw") {
            return formData.recipientAddress && formData.amount && formData.gameId;
        } else if (activeTab === "fund") {
            return formData.gameId && formData.amount;
        }
        return true;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(address!);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
                {/* Address Section */}
                <div className="flex items-center justify-between mb-8 ">
                    <div className="flex-1">
                        <span className="text-gray-600 text-sm">address</span>
                        <div className="flex items-center mt-1">
                            <span className="font-mono text-xs text-gray-800">{getShortAddress(address || "")}</span>
                            <button
                                onClick={handleCopy}
                                className="ml-2 p-1 border border-gray-300 rounded hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-pointer"
                                title="Copy address"
                            >
                                <Copy size={14} />
                            </button>
                        </div>
                    </div>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                        <Link href={"/"}>Back home</Link>
                    </button>
                </div>

                <div className="text-center mb-8">
                    <Balance address={address} />
                </div>

                {/* Tab Buttons */}
                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setActiveTab("registerGame")}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                            activeTab === "registerGame" ? "bg-blue-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        Register Game
                    </button>

                    <button
                        onClick={() => setActiveTab("fund")}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                            activeTab === "fund" ? "bg-red-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        Fund
                    </button>

                    <button
                        onClick={() => setActiveTab("withdraw")}
                        className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                            activeTab === "withdraw" ? "bg-red-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                        Withdraw
                    </button>
                </div>

                {/* Form Fields */}
                {activeTab === "withdraw" && (
                    <div className="space-y-4 mb-6">
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Recipient Address</label>
                            <input
                                type="text"
                                value={formData.recipientAddress}
                                onChange={(e) => handleInputChange("recipientAddress", e.target.value)}
                                className="w-full p-4 bg-gray-50 rounded-xl border-none text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="0x..."
                            />
                        </div>
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
                )}
                {activeTab === "fund" && (
                    <div className="space-y-4 mb-6">
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
                )}
                {activeTab === "registerGame" && (
                    <form className="space-y-4 mb-6" onSubmit={handleRegisterGame}>
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Game Name</label>
                            <input
                                type="text"
                                value={gameForm.gameName}
                                onChange={(e) => handleGameInputChange("gameName", e.target.value)}
                                className="w-full p-4 bg-gray-50 rounded-xl border-none text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter game name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Description</label>
                            <textarea
                                value={gameForm.description}
                                onChange={(e) => handleGameInputChange("description", e.target.value)}
                                className="w-full p-4 bg-gray-50 rounded-xl border-none text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter description"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isRegisteringGame}
                            className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                                isRegisteringGame ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-lg"
                            }`}
                        >
                            {isRegisteringGame ? "Registering..." : "Register"}
                        </button>
                        {registerGameResult === "success" && <div className="text-green-600 text-center mt-2">Game registered successfully!</div>}
                        {registerGameResult === "error" && <div className="text-red-600 text-center mt-2">Failed to register game.</div>}
                    </form>
                )}
                {/* Confirm Button */}
                {(activeTab === "withdraw" || activeTab === "fund") && (
                    <button
                        onClick={handleConfirm}
                        disabled={!isFormValid() || isConfirming}
                        className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                            isFormValid() && !isConfirming ? "bg-gray-800 hover:bg-gray-900 shadow-lg" : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        {isConfirming ? "Confirming..." : "Confirm"}
                    </button>
                )}
            </div>
        </div>
    );
}
