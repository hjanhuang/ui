"use client";

import { useAccount } from "@starknet-react/core";
import { RpcProvider, Contract, Abi } from "starknet";

export async function useGetABI() {
  const { account } = useAccount();
  const rpcProvider = new RpcProvider({
    nodeUrl:
      process.env.NEXT_PUBLIC_STARKNET_NODE_URL ||
      "https://starknet-sepolia.public.blastapi.io",
  });

  const contractAddress =
    process.env.CONTRACT_ADDRESS ||
    "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9";
  const vault_address = contractAddress;

  const { abi: vaultAbi } = await rpcProvider.getClassAt(contractAddress);
  const vault = new Contract(vaultAbi, vault_address, rpcProvider);
  if (account) {
    vault.connect(account);
  }
  return {
    abi: vaultAbi as Abi,
    vault: vault as Contract,
  };
}
