export function parseBalance(
  balanceData:
    | {
        decimals: number;
        formatted: string;
        symbol: string;
        value: bigint;
      }
    | undefined,
  displayDecimals: number = 4
): string {
  if (!balanceData) return "0.0000";

  const { formatted, symbol } = balanceData;

  const balance = parseFloat(formatted);
  const formattedBalance = balance.toFixed(displayDecimals);

  return `${formattedBalance} ${symbol}`;
}
