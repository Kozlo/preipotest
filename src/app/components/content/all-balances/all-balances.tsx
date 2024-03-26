'use client';
import { FC } from 'react';

// components
import { Balance } from '@/app/components/content/all-balances/balance/balance';

// constants
import {
  ETH_ADDRESS,
  ETH_NAME,
  TOKEN_ADDRESS,
  TOKEN_NAME,
} from '@/app/components/content/all-balances/constants';

/**
 * Container component for displaying all balances
 */
export const AllBalances: FC = () => {
  // TODO: add proper styling
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <Balance
        address={ETH_ADDRESS}
        name={ETH_NAME}
      />
      <Balance
        address={TOKEN_ADDRESS}
        name={TOKEN_NAME}
      />
    </div>
  );
}
