"use client";

import { useBalance } from "@starknet-react/core";
import { Skeleton } from "@radix-ui/themes";

interface GetBalanceProps {
    address?: string | null;
}

export default function Balance({ address }: GetBalanceProps) {
    const { data, isLoading, isError, error } = useBalance({
        address: (address as `0x${string}`) || undefined,
    });

    if (isError) return <div className="flex items-center gap-2 text-red-500 text-sm">Error fetching balance</div>;

    return (
        <>
            <div className="text-gray-600 text-sm mb-2">Balance</div>
            <div className="text-2xl font-semibold flex items-center justify-center mb-4">
                {isLoading ? (
                    <Skeleton width="140px" height="30px" />
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
