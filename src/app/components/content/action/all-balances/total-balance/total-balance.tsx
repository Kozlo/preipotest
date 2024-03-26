'use client';
import { FC } from 'react';

// types
import { BalanceValue } from '@/app/types/index.type';

/**
 * Balance component.
 *
 * Shows the balance for a given currency or token.
 */
export const TotalBalance: FC<{
  balance: BalanceValue;
  name: string;
}> = ({ balance, name }) => {
  // TODO: add proper styling
  return (
    <div>
      {name} balance: {balance !== null ? balance.toString() : 'n/a'}
    </div>
  );
};
