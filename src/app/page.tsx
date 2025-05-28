"use client";

import { useEffect, useState } from "react";
import { Copy, LogOut } from "lucide-react";
import {
  useAccount,
  useContract,
  useDisconnect,
  useNetwork,
  useSendTransaction,
} from "@starknet-react/core";
import { WalletConnectorModal } from "./components/wallet";
import { getShortAddress } from "./utils/getShortAddress";
import { useBalance } from "@starknet-react/core";
import { Skeleton } from "@heroui/react";

import {
  Account,
  RpcProvider,
  json,
  Contract,
  ec,
  constants,
  num,
  hash,
  LegacyContractClass,
  Abi,
} from "starknet";

interface GetBalanceProps {
  address?: string | null;
}

function GetBalance({ address }: GetBalanceProps) {
  const { data, isLoading, isError, error } = useBalance({
    address: (address as `0x${string}`) || undefined,
  });
  console.log("address: ", address);

  if (isError)
    return (
      <div className="flex items-center gap-2 text-red-500 text-sm">
        Error fetching balance
      </div>
    );

  return (
    <>
      <div className="text-gray-600 text-sm mb-2">Balance</div>
      <div className="text-2xl font-semibold flex items-center justify-center mb-4">
        {isLoading ? (
          <Skeleton className="w-24 h-6" />
        ) : (
          <div className="flex items-center gap-2">
            {data?.formatted || "0.00"}
            <div>{data?.symbol || "ETH"}</div>
          </div>
        )}
      </div>
    </>
  );
}

interface DepositFormProps {
  amount: string;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}

function DepositForm({ amount, setAmount, onConfirm }: DepositFormProps) {
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
          className={`w-full py-4 px-6 text-lg border-2 rounded-xl focus:outline-none transition-colors ${amountError
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
        className={`w-auto px-8 py-3 rounded-xl font-medium transition-colors float-right ${amountError || !amount || parseFloat(amount) <= 0
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

interface WithdrawFormProps {
  recipient: string;
  setRecipient: (recipient: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}

function WithdrawForm({
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
          className={`w-full py-4 px-6 text-lg border-2 rounded-xl focus:outline-none transition-colors ${recipientError
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
        className={`w-auto px-8 py-3 rounded-xl font-medium transition-colors float-right ${recipientError || !amount || parseFloat(amount) <= 0
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
  const maxQtyGasAuthorized = 180000;
  const maxPriceAuthorizeForOneGas = 10 ** 15;

  const { address, account } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  // const { abi, vault } = useGetABI();
  const [abi, setAbi] = useState<Abi | undefined>();
  const [vault, setVault] = useState<Contract | null>(null);
  const [erc20Abi, setErc20Abi] = useState<Abi | undefined>();
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
      const vaultContract = new Contract(vaultAbi, contractAddress, rpcProvider);
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

  const erc20Address =
    "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d";

  const { contract } = useContract({
    abi,
    address: chain.nativeCurrency.address,
  });

  console.log("Contract: ", contract);

  // approve
  // const { sendAsync, error, data } = useSendTransaction({
  //   calls:
  //     contract && address
  //       ? [contract.populate("approve", [contractAddress, 1])]
  //       : undefined,
  // });

  const [amount, setAmount] = useState("1");
  const [recipient, setRecipient] = useState("");
  const [activeTab, setActiveTab] = useState("deposit");

  // const rpcProvider = new RpcProvider({
  //   nodeUrl:
  //     "https://starknet-sepolia.public.blastapi.io",
  // });

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

      console.log("Vault: ", vault);

      const balance = await vault.getBalance("0x00d5944409b0e99d8671207c1a1f8db223a258f2effa29efdf2cbddf0a85d1b1");
      console.log("Balance: ", balance);
      const rangeIndex = await vault.getRangeIndex();
      console.log("range: ", rangeIndex);
      const myCall1 = token.populate("approve", ["0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9", amount]);
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



      // const vault_address = contractAddress;

      // const { abi: vaultAbi } = await rpcProvider.getClassAt(contractAddress);
      // const vault = new Contract(vaultAbi, vault_address, rpcProvider);
      // vault.connect(account);
      // // return vault;

      //connect to erc20
      // const testAbi = await rpcProvider.getClassAt(erc20Address);
      // if (testAbi === undefined || !("abi" in testAbi)) {
      //   throw new Error("no abi.");
      // }

      // const contract = new Contract(testAbi.abi, erc20Address, rpcProvider);
      // contract.connect(account);
      // return erc20;

      //sendAsync();

      console.log("data");

      //  call deposit
    } else {
      console.log(`Withdrawing ${amount} to ${recipient}`);
    }
  };

  if (!address)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <WalletConnectorModal />
      </div>
    );

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-gray-50 rounded-3xl shadow-lg p-8 w-full max-w-md">
        {/* Header with address and buttons */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <span className="text-gray-600 text-sm">address</span>
            <div className="font-mono text-sm mt-1">
              {getShortAddress(address)}
            </div>
          </div>
          <div className="flex gap-2 ml-4">
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
          <GetBalance address={address} />
        </div>

        {/* Deposit/Withdraw Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md ${activeTab === "deposit"
              ? "bg-red-500 text-white border-2 border-red-500 hover:bg-red-600 hover:border-red-600"
              : "bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800"
              }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setActiveTab("withdraw")}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-200 cursor-pointer transform hover:scale-105 hover:shadow-md ${activeTab === "withdraw"
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

async function useGetABI() {
  const { account } = useAccount();
  const rpcProvider = new RpcProvider({
    nodeUrl:
      "https://starknet-sepolia.public.blastapi.io",
  });

  const contractAddress =
    process.env.CONTRACT_ADDRESS ||
    "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9";
  const vault_address = contractAddress;

  const { abi: vaultAbi } = await rpcProvider.getClassAt(contractAddress);
  const vault = new Contract(vaultAbi, vault_address, rpcProvider);
  console.log("Vault: ", vault);
  console.log("Account", account);
  vault.connect(account);

  // const totalWithdraw = await vault.getTotalWithdraw();
  // console.log("TotalWithdraw: ", totalWithdraw);

  return {
    abi: vaultAbi as Abi,
    vault: vault as Contract,
  };
}
