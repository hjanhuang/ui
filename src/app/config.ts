export const STARKNET_NODE_URL = "https://starknet-sepolia.public.blastapi.io";
export const FACEIT_CONTRACT = process.env.NEXT_PUBLIC_FACEIT_CONTRACT!;
export const ERC20_CONTRACT = process.env.NEXT_PUBLIC_ERC20_CONTRACT!;
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x05f0f718e8ae8356b800001104e840ba2384e413f5b1567b55dc457c044a75d9";

export const ConfigBackend = {
    BACKEND_HOST: process.env.NEXT_PUBLIC_BACKEND_HOST || "localhost",
    BACKEND_PORT: process.env.NEXT_PUBLIC_BACKEND_PORT || 8000,
    PROTOCOL: process.env.NEXT_PUBLIC_PROTOCOL || "http",
};

export const API_BASE_URL = `${ConfigBackend.PROTOCOL}://${ConfigBackend.BACKEND_HOST}:${ConfigBackend.BACKEND_PORT}`;
