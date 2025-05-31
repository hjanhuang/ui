// hooks/useGetABI.ts
import { useAccount } from "@starknet-react/core";
import { Contract, Abi } from "starknet";
import { RpcProvider } from "starknet";
import { useEffect, useState } from "react";
import { CONTRACT_ADDRESS, STARKNET_NODE_URL } from "../config";

export function useGetABI() {
    const { account } = useAccount();

    const [vault, setVault] = useState<Contract | null>(null);
    const [abi, setAbi] = useState<Abi | null>(null);

    useEffect(() => {
        const fetch = async () => {
            const rpcProvider = new RpcProvider({
                nodeUrl: STARKNET_NODE_URL,
            });

            const contractAddress = CONTRACT_ADDRESS;

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