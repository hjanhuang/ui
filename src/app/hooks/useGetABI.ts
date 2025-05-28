// hooks/useGetABI.ts
import { useAccount } from "@starknet-react/core";
import { Contract, Abi } from "starknet";
import { RpcProvider } from "starknet";
import { useEffect, useState } from "react";

export function useGetABI() {
  const { account } = useAccount();

  const [vault, setVault] = useState<Contract | null>(null);
  const [abi, setAbi] = useState<Abi | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const rpcProvider = new RpcProvider({
        nodeUrl:
          process.env.NEXT_PUBLIC_STARKNET_NODE_URL ||
          "https://starknet-sepolia.public.blastapi.io",
      });

      const contractAddress =
        process.env.CONTRACT_ADDRESS ||
        "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9";

      try {
        const { abi: vaultAbi } = await rpcProvider.getClassAt(contractAddress);
        if (!vaultAbi) throw new Error("ABI not found");

        const contract = new Contract(vaultAbi, contractAddress, rpcProvider);
        if (account) contract.connect(account);
        console.log(contract);

        setVault(contract);
        setAbi(vaultAbi as Abi);
      } catch (e) {
        console.error("Error loading contract", e);
      }
    };

    fetch();
  }, [account]);

  return { abi, vault };
}
