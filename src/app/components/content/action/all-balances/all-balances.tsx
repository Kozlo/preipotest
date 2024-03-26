'use client';
import { FC, useContext } from 'react';

// constants
import {
  ETH_NAME,
  TOKEN_NAME,
} from '@/app/constants';

// components
import { BalanceContext } from '@/app/components/content/action/balance-context';

// components
import { TotalBalance } from '@/app/components/content/action/all-balances/total-balance';

// styles
import styles from './all-balances.module.scss';
import { useAccount } from 'wagmi';

/**
 * Container component for displaying all balances
 */
export const AllBalances: FC = () => {
  const account = useAccount();
  // TODO: replace with the actual address
  const accountAddress = account && account.addresses ? account?.addresses[0] : '';
  const balances = useContext(BalanceContext);

  if (!balances) {
    return null;
  }

  // TODO: add proper styling
  return (
    <div className={styles.topContainer}>
      <div className={styles.textContainer}>
        <span className={styles.welcome}>Welcome, <span
          className={styles.address}>{accountAddress?.slice(0, 6)}...SignerAddress</span></span>
      </div>
      <div className={styles.balancesContainer}>
        <TotalBalance
          balance={balances[ETH_NAME].balance}
          name={ETH_NAME}
        />
        <TotalBalance
          balance={balances[TOKEN_NAME].balance}
          name={TOKEN_NAME}
        />
      </div>
    </div>
  );
};
