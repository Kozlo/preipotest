'use client';
import { FC } from 'react';

// types
import { BalanceValue } from '@/app/types/index.type';

// styles
import styles from './total-balance.module.scss';

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
      <span className={styles.name}>{name} Balance:</span> <span className={styles.balance}>{balance !== null ? balance.toString() : 'n/a'}</span>
    </div>
  );
};
