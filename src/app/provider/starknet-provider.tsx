"use client";

import React from "react";
import { sepolia } from "@starknet-react/chains";
import { StarknetConfig, voyager, publicProvider } from "@starknet-react/core";
import { InjectedConnector } from "starknetkit/injected";
import { WebWalletConnector } from "starknetkit/webwallet";

const connectors = [
  new InjectedConnector({
    options: { id: "argentX", name: "Argent X" },
  }),
  new InjectedConnector({
    options: { id: "braavos", name: "Braavos" },
  }),
  new WebWalletConnector({ url: "https://web.argent.xyz" }),
];

type StarknetProviderProps = {
  children: React.ReactNode;
};

export default function StarknetProvider({ children }: StarknetProviderProps) {
  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
