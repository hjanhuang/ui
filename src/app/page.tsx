"use client";

import { useEffect, useState } from "react";
import { Copy, LogOut } from "lucide-react";
import { useAccount, useDisconnect, useNetwork } from "@starknet-react/core";
import { WalletConnectorModal } from "./components/wallet";
import { getShortAddress } from "./utils/getShortAddress";

import {
  RpcProvider,
  Contract,
  constants,
  num,
  Abi,
  CallData,
  cairo,
} from "starknet";
import Balance from "./components/balance";
import Link from "next/link";
import { useRequestWithdraw } from "./hooks/use-request-withdraw";
import { Skeleton } from "@radix-ui/themes";

interface DepositFormProps {
  amount: string;
  isLoading?: boolean;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}

function DepositForm({
  amount,
  setAmount,
  onConfirm,
  isLoading,
}: DepositFormProps) {
  const [amountError, setAmountError] = useState("");
  const { address } = useAccount();

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
        {isLoading ? "Confirming..." : "Confirm"}
      </button>
      <div className="clear-both"></div>
    </>
  );
}

interface WithdrawFormProps {
  recipient: string;
  setRecipient: (recipient: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}
type RequestWithdraw = {
  sender: string;
  recipient: string;
  amount: string;
  status: string; // pending | finish  | check
};

function WithdrawForm({
  recipient,
  setRecipient,
  amount,
  setAmount,
  onConfirm,
}: WithdrawFormProps) {
  const { address } = useAccount();
  const [recipientError, setRecipientError] = useState("");
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  // fake
  const [withdrawRequests, setWithdrawRequests] = useState<RequestWithdraw[]>([
    {
      sender: "0x1",
      recipient: "0x2",
      amount: "11",
      status: "pending",
    },
    {
      sender: "0x1",
      recipient: "0x2",
      amount: "11",
      status: "pending",
    },
  ]);

  //  query request withdraws real
  const { data, isLoading } = useRequestWithdraw({
    sender: address || "",
  });

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

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
      {/* Request Withdraw Card  */}

      <div className="h-[220px] overflow-y-auto">
        {isLoading ? (
          <Skeleton width="100%" height="50px" />
        ) : (
          withdrawRequests.length > 0 &&
          withdrawRequests.map((requestWithdraw, index) => (
            <div
              key={index}
              className="mb-6 p-4 bg-white border-2 border-gray-200 rounded-xl "
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  Withdraw Request #{index + 1}
                </h3>
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                  {expandedCards[index] ? (
                    <svg
                      className="w-5 h-5 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {expandedCards[index] && (
                <div className="mt-3 space-y-2 border-t border-gray-100 pt-3">
                  {requestWithdraw.sender && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sender:</span>
                      <span className="font-mono text-sm">
                        {getShortAddress(requestWithdraw.sender)}
                      </span>
                    </div>
                  )}
                  {requestWithdraw.recipient && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recipient:</span>
                      <span className="font-mono text-sm">
                        {getShortAddress(requestWithdraw.recipient)}
                      </span>
                    </div>
                  )}
                  {requestWithdraw.amount && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium">
                        {requestWithdraw.amount}
                      </span>
                    </div>
                  )}
                  {requestWithdraw.status && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          requestWithdraw.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : requestWithdraw.status === "finish"
                            ? "bg-green-100 text-green-800"
                            : requestWithdraw.status === "check"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {requestWithdraw.status}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={!!recipientError || !amount || parseFloat(amount) <= 0}
        className={`w-auto px-8 py-3 rounded-xl font-medium transition-colors float-right mt-5 ${
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

export default function Home() {
  // Commented out unused variables that might be needed in future
  const maxQtyGasAuthorized = 180000;
  const maxPriceAuthorizeForOneGas = 10 ** 15;

  const { address, account, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  // const { abi, vault } = useGetABI();
  const [abi, setAbi] = useState<Abi | undefined>();
  const [vault, setVault] = useState<Contract | null>(null);
  const [token, setToken] = useState<Contract | null>(null);

  useEffect(() => {
    const fetchAbiAndContract = async () => {
      if (!account) return;

      const rpcProvider = new RpcProvider({
        nodeUrl: "https://starknet-sepolia.public.blastapi.io",
      });
      const contractAddress =
        "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9";
      const { abi: vaultAbi } = await rpcProvider.getClassAt(contractAddress);
      if (!vaultAbi) return;
      const vaultContract = new Contract(
        vaultAbi,
        contractAddress,
        rpcProvider
      );
      vaultContract.connect(account);

      setAbi(vaultAbi as Abi);
      setVault(vaultContract);

      const erc20_address =
        "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d";
      const { abi: tokenAbi } = await rpcProvider.getClassAt(erc20_address);
      if (!tokenAbi) return;
      const erc20 = new Contract(tokenAbi, erc20_address, rpcProvider);
      erc20.connect(account);
      setToken(erc20);
    };

    fetchAbiAndContract();
  }, [account]);

  const [amount, setAmount] = useState("1");
  const [recipient, setRecipient] = useState("");
  const [activeTab, setActiveTab] = useState("deposit");
  const [isLoadingDeposit, setIsLoadingDeposit] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address!);
  };

  const handleLogout = () => {
    disconnect();
  };

  const handleConfirm = async () => {
    if (activeTab === "deposit") {
      if (!address || !account) return;

      if (!vault) {
        console.error("Vault contract is not loaded yet.");
        return;
      }

      if (!token) {
        console.error("Token contract is not loaded yet.");
        return;
      }

      setIsLoadingDeposit(true);

      console.log("Vault: ", vault);
      const rpcProvider = new RpcProvider({
        nodeUrl: "https://starknet-sepolia.public.blastapi.io",
      });

      const balance = await vault.getBalance(
        "0x00d5944409b0e99d8671207c1a1f8db223a258f2effa29efdf2cbddf0a85d1b1"
      );
      console.log("Balance: ", balance);
      const rangeIndex = await vault.getRangeIndex();
      console.log("range: ", rangeIndex);

      const multiCall = await account.execute([
        // Calling the first contract
        {
          contractAddress:
            "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
          entrypoint: "approve",
          // approve 1 wei for bridge
          calldata: CallData.compile({
            spender:
              "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9",
            amount: cairo.uint256(amount),
          }),
        },
        // Calling the second contract
        {
          contractAddress:
            "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9",
          entrypoint: "deposit",
          // transfer 1 wei to the contract address
          calldata: CallData.compile({
            amount: cairo.uint256(amount),
          }),
        },
      ]);
      await rpcProvider.waitForTransaction(multiCall.transaction_hash);
      // const myCall1 = token.populate("approve", [
      //   "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9",
      //   amount,
      // ]);

      // const deposit = vault.populate("deposit", [
      //   "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9",
      //   amount,
      // ]);
      // const { transaction_hash: txH } = await account.execute(
      //   [myCall1, deposit],
      //   {
      //     version: constants.TRANSACTION_VERSION.V3,
      //     maxFee: 1e15,
      //     tip: 1e13,
      //     paymasterData: [],
      //     resourceBounds: {
      //       l1_gas: {
      //         max_amount: num.toHex(maxQtyGasAuthorized),
      //         max_price_per_unit: num.toHex(maxPriceAuthorizeForOneGas),
      //       },
      //       l2_gas: {
      //         max_amount: num.toHex(0),
      //         max_price_per_unit: num.toHex(0),
      //       },
      //     },
      //   }
      // );
      // console.log("tx: ", txH);
      // const txR = await rpcProvider.waitForTransaction(txH);
      // if (txR.isSuccess()) {
      //   console.log("Paid fee =", txR.actual_fee);
      //   console.log("events: ", txR.events);
      // }

      setIsLoadingDeposit(false);

      //  call deposit
    } else {
      console.log(`Withdrawing ${amount} to ${recipient}`);
    }
  };

  if (!isConnected)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <WalletConnectorModal />
      </div>
    );

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 ">
      <div
        className="bg-gray-50 rounded-3xl shadow-lg p-4 w-full max-w-md 
        "
      >
        <div className="flex items-center justify-between mb-8 ">
          <div className="flex-1">
            <span className="text-gray-600 text-sm">address</span>
            <div className="font-mono text-sm mt-1">
              {getShortAddress(address || "")}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Link href={"/faciet"} className="hover:underline">
              Faciet
            </Link>
            <button
              onClick={handleCopy}
              className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:shadow-md transform hover:scale-105 transition-all duration-200 cursor-pointer"
              title="Copy address"
            >
              <Copy size={16} />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 border-2 border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-300 hover:text-red-600 hover:shadow-md transform hover:scale-105 transition-all duration-200 cursor-pointer"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        <div className="text-center mb-8">
          <Balance address={address} />
        </div>

        {/* Deposit/Withdraw Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md ${
              activeTab === "deposit"
                ? "bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800"
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md ${
              activeTab === "withdraw"
                ? "bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-900 hover:border-gray-900"
                : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800"
            }`}
          >
            Withdraw
          </button>
        </div>

        {activeTab === "deposit" ? (
          <DepositForm
            amount={amount}
            setAmount={setAmount}
            onConfirm={handleConfirm}
            isLoading={isLoadingDeposit}
          />
        ) : (
          <WithdrawForm
            recipient={recipient}
            setRecipient={setRecipient}
            amount={amount}
            setAmount={setAmount}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
}
