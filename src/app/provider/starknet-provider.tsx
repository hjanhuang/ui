"use client";
import { InjectedConnector } from "starknetkit/injected";
import { WebWalletConnector } from "starknetkit/webwallet";
import { mainnet, sepolia } from "@starknet-react/chains";
import {
  Connector,
  voyager,
  publicProvider,
  StarknetConfig,
} from "@starknet-react/core";

const connectors = [
  new InjectedConnector({
    options: { id: "argentX", name: "Argent X" },
  }),
  new InjectedConnector({
    options: { id: "braavos", name: "Braavos" },
  }),
  new WebWalletConnector({ url: "https://web.argent.xyz" }),
];

export default function StarknetProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StarknetConfig
      chains={[mainnet, sepolia]}
      provider={publicProvider()}
      connectors={connectors as Connector[]}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
