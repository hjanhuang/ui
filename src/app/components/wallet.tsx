"use client";

import { Connector, useConnect } from "@starknet-react/core";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";

const buttonStyles =
  "w-auto px-8 py-3 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors float-right";

import React from "react";

export function WalletConnectorModal() {
  const { connect, connectors } = useConnect();

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });

  async function connectWallet() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    await connect({ connector: connector as Connector });
  }

  return (
    <button onClick={connectWallet} className={buttonStyles}>
      Connect Wallet
    </button>
  );
}
