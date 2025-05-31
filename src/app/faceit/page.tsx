"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAccount, useDisconnect, useNetwork } from "@starknet-react/core";
import { axiosRequest } from "../hooks/axiosUtils";
import { getShortAddress } from "../utils/getShortAddress";
import { Copy } from "lucide-react";
import Balance from "../components/balance";
import { RpcProvider, Contract, constants, num, Abi, CallData, cairo, uint256 } from "starknet";
import GameList from "../components/GameList";
import { STARKNET_NODE_URL, FACEIT_CONTRACT, ERC20_CONTRACT, ConfigBackend, API_BASE_URL } from "../config";

export default function FundPage() {
    //const { address } = useAccount();
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

    const maxQtyGasAuthorized = 180000;
    const maxPriceAuthorizeForOneGas = 10 ** 15;

    const { address, account, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();

    const rpcProvider = new RpcProvider({
        nodeUrl: STARKNET_NODE_URL,
    });

    const [abi, setAbi] = useState<Abi | undefined>();
    const [faceit, setFaceit] = useState<Contract | null>(null);
    const [token, setToken] = useState<Contract | null>(null);

    // Add submit status for fund/withdraw
    const [submitStatus, setSubmitStatus] = useState<"idle" | "processing" | "success" | "fail">("idle");

    useEffect(() => {
        const fetchAbiAndContract = async () => {
            if (!account) return;

            const contractAddress = FACEIT_CONTRACT;
            const { abi: faceitAbi } = await rpcProvider.getClassAt(contractAddress);
            if (!faceitAbi) return;
            const faceitContract = new Contract(faceitAbi, contractAddress, rpcProvider);
            faceitContract.connect(account);

            setAbi(faceitAbi as Abi);
            setFaceit(faceitContract);

            const erc20_address = ERC20_CONTRACT;
            const { abi: tokenAbi } = await rpcProvider.getClassAt(erc20_address);
            if (!tokenAbi) return;
            const erc20 = new Contract(tokenAbi, erc20_address, rpcProvider);
            erc20.connect(account);
            setToken(erc20);
        };

        fetchAbiAndContract();
    }, [account]);

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

    const handleConfirm = async () => {
        setIsConfirming(true);
        setSubmitStatus("processing");
        try {
            if (activeTab == "fund") {
                console.log("Fund");
                const amount = formData.amount;
                const gameId = formData.gameId;

                console.log("Amount", amount);
                console.log("gameId", gameId);

                if (!address || !account) return;

                if (!faceit) {
                    console.error("Faceit contract is not loaded yet.");
                    return;
                }

                if (!token) {
                    console.error("Token contract is not loaded yet.");
                    return;
                }

                // const rpcProvider = new RpcProvider({
                //     nodeUrl: "https://starknet-sepolia.public.blastapi.io",
                // });

                const amountUint256 = uint256.bnToUint256(BigInt(amount));
                const gameIdUint256 = uint256.bnToUint256(BigInt(gameId));
                const multiCall = await account.execute([
                    {
                        contractAddress: ERC20_CONTRACT,
                        entrypoint: "transfer",
                        calldata: CallData.compile({
                            recipient: FACEIT_CONTRACT,
                            amount: amountUint256,
                        }),
                    },
                    {
                        contractAddress: FACEIT_CONTRACT,
                        entrypoint: "raiseFund",
                        calldata: CallData.compile({
                            gameId: gameIdUint256,
                            amountToken: amountUint256,
                        }),
                    },
                ]);
                console.log("Not Done");
                await rpcProvider.waitForTransaction(multiCall.transaction_hash);
                console.log("Done");
                setSubmitStatus("success");
            } else if (activeTab == "withdraw") {
                if (!address || !account) return;

                const recipient = formData.recipientAddress;
                const gameId = formData.gameId;
                const amount = formData.amount;

                const amountUint256 = uint256.bnToUint256(BigInt(amount));
                const gameIdUint256 = uint256.bnToUint256(BigInt(gameId));

                if (!faceit) {
                    console.error("Faceit contract is not loaded yet.");
                    return;
                }

                if (!token) {
                    console.error("Token contract is not loaded yet.");
                    return;
                }

                const myCall1 = faceit.populate("requestWithdraw", [gameId, amount, recipient]);
                const { transaction_hash: txH } = await account.execute(myCall1, {
                    version: constants.TRANSACTION_VERSION.V3,
                    maxFee: 1e15,
                    tip: 1e13,
                    paymasterData: [],
                    resourceBounds: {
                        l1_gas: {
                            max_amount: num.toHex(maxQtyGasAuthorized),
                            max_price_per_unit: num.toHex(maxPriceAuthorizeForOneGas),
                        },
                        l2_gas: {
                            max_amount: num.toHex(0),
                            max_price_per_unit: num.toHex(0),
                        },
                    },
                });
                console.log("tx: ", txH);
                const txR = await rpcProvider.waitForTransaction(txH);
                setSubmitStatus("success");
            }
        } catch (e) {
            setSubmitStatus("fail");
        }
        setTimeout(() => {
            setIsConfirming(false);
            setFormData({
                recipientAddress: "",
                amount: "",
                gameId: "",
            });
            setSubmitStatus("idle");
        }, 2000);
    };

    // Helper to get all games (for idGame uniqueness check)
    async function fetchAllGames() {
        let allGames: any[] = [];
        let page = 1;
        const PAGE_SIZE = 100;
        while (true) {
            const res = await axiosRequest({
                url: `${API_BASE_URL}/game/all`,
                method: "GET",
                params: { skip: (page - 1) * PAGE_SIZE, limit: PAGE_SIZE },
            });
            if (res && res.status === 200 && Array.isArray(res.data.data)) {
                allGames = allGames.concat(res.data.data);
                if (res.data.data.length < PAGE_SIZE) break;
                page++;
            } else {
                break;
            }
        }
        return allGames;
    }

    const handleRegisterGame = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsRegisteringGame(true);
        setRegisterGameResult(null);
        // Generate unique idGame
        let idGame: string;
        let allGames = await fetchAllGames();
        const existingIds = new Set(allGames.map((g: any) => g.idGame));
        do {
            idGame = Math.floor(Math.random() * 1000000).toString();
        } while (existingIds.has(idGame));

        const host = address || "";
        const { gameName, description } = gameForm;
        if (!address || !account) return;

        if (!faceit) {
            console.error("Faceit contract is not loaded yet.");
            return;
        }

        if (!token) {
            console.error("Token contract is not loaded yet.");
            return;
        }
        try {
            const rpcProvider = new RpcProvider({
                nodeUrl: STARKNET_NODE_URL,
            });

            const myCall1 = faceit.populate("register", [idGame]);
            const { transaction_hash: txH } = await account.execute(myCall1, {
                version: constants.TRANSACTION_VERSION.V3,
                maxFee: 1e15,
                tip: 1e13,
                paymasterData: [],
                resourceBounds: {
                    l1_gas: {
                        max_amount: num.toHex(maxQtyGasAuthorized),
                        max_price_per_unit: num.toHex(maxPriceAuthorizeForOneGas),
                    },
                    l2_gas: {
                        max_amount: num.toHex(0),
                        max_price_per_unit: num.toHex(0),
                    },
                },
            });
            console.log("tx: ", txH);
            const txR = await rpcProvider.waitForTransaction(txH);

            const res = await axiosRequest({
                url: `${API_BASE_URL}/game/register`,
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
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-8 p-4">
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
                    <>
                        <button
                            onClick={handleConfirm}
                            disabled={!isFormValid() || isConfirming}
                            className={`w-full py-4 rounded-xl font-semibold text-white transition-all ${
                                isFormValid() && !isConfirming ? "bg-gray-800 hover:bg-gray-900 shadow-lg" : "bg-gray-400 cursor-not-allowed"
                            }`}
                        >
                            {isConfirming ? "Confirming..." : "Confirm"}
                        </button>
                        {submitStatus === "processing" && <div className="text-blue-600 text-center mt-2">Processing...</div>}
                        {submitStatus === "success" && <div className="text-green-600 text-center mt-2">Success!</div>}
                        {submitStatus === "fail" && <div className="text-red-600 text-center mt-2">Failed. Please try again.</div>}
                    </>
                )}
            </div>
            <GameList />
        </div>
    );
}
