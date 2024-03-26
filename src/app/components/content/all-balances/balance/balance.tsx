'use client';
import { FC } from 'react';

// types
import { BalanceAddress } from '@/app/types/index.type';

// hooks
import { useGetBalance } from '@/app/components/content/all-balances/balance/hooks/get-balance.hook';

/**
 * Balance component.
 *
 * Shows the balance for a given currency or token..
 */
export const Balance: FC<{
  address: BalanceAddress;
  name: string;
}> = ({ address, name }) => {
  const { loading, balance } = useGetBalance({
    address,
  });

  // TODO: add proper styling
  return (
    <>
      <div>
        {loading ? (
          <div>Loading {name} balance...</div>
        ) : (
          <div>{name} balance: {balance !== null ? balance.toString() : 'n/a'}</div>
        )}
      </div>
    </>
  );
}
