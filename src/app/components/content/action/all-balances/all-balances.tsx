'use client';
import { FC, useContext } from 'react';

// constants
import {
  ETH_NAME,
  TOKEN_NAME ,
} from '@/app/constants';

// components
import { BalanceContext } from '@/app/components/content/action/balance-context';

// components
import { TotalBalance } from '@/app/components/content/action/all-balances/total-balance';

/**
 * Container component for displaying all balances
 */
export const AllBalances: FC = () => {
  const balances = useContext(BalanceContext)

  if (!balances) {
    return null;
  }

  // TODO: add proper styling
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <TotalBalance
        balance={balances[ETH_NAME].balance}
        name={ETH_NAME}
      />
      <TotalBalance
        balance={balances[TOKEN_NAME].balance}
        name={TOKEN_NAME}
      />
    </div>
  );
}
