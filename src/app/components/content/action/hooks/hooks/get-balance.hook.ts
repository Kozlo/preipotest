import { useEffect, useState } from 'react';
import { getBalance } from '@wagmi/core';
import { config } from '@/wagmi';
import { BalanceAddress } from '@/app/types/index.type';

/**
 * Get balance for currency or token hook.
 */
export const useGetBalance = ({ address }: {
  address: BalanceAddress;
}): {
  balance: bigint | null;
  loading: boolean;
} => {
  const [balance, setBalance] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBalance(config, { address })
      .then(({ value }) => {
        setBalance(value);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(`Error retrieving balance for ${address}`, error);
      });
  }, [
    address,
  ]);

  return {
    balance,
    loading,
  };
};
