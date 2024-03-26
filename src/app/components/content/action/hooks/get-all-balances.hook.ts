import { useEffect, useState } from 'react';

// types
import { BalanceContextType } from '@/app/types/index.type';

// constants
import { ETH_ADDRESS, ETH_NAME, TOKEN_ADDRESS, TOKEN_NAME } from '@/app/constants';

// hooks
import { useGetBalance } from '@/app/components/content/action/hooks/hooks/get-balance.hook';

/**
 * Get all balances.
 */
export const useGetAllBalances = (): {
  balances: BalanceContextType | null;
  loading: boolean;
} => {
  const [balances, setBalances] = useState<BalanceContextType | null>(null);

  const { balance: ethBalance, loading: ethLoading } = useGetBalance({
    address: ETH_ADDRESS,
  });
  const { balance: tokenBalance, loading: tokenLoading } = useGetBalance({
    address: TOKEN_ADDRESS,
  });

  /**
   * Listen for balance changes.
   */
  useEffect(() => {
    if (ethBalance === null || tokenBalance === null) {
      return;
    }

    setBalances({
      [ETH_NAME]: {
        balance: ethBalance,
        name: ETH_NAME,
      },
      [TOKEN_NAME]: {
        balance: tokenBalance,
        name: TOKEN_NAME,
      },
    });
  }, [
    ethBalance,
    tokenBalance,
  ]);

  return {
    balances,
    loading: ethLoading || tokenLoading,
  };
};
