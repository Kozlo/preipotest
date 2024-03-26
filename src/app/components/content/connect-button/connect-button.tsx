'use client';

import { FC } from 'react';
import { Connector, useConnect } from 'wagmi';

import styles from './connect-button.module.scss';

/**
 * Connect button for a connector.
 */
export const ConnectButton: FC<{
  connector: Connector
}> = ({ connector }) => {
  const { connect } = useConnect();

  return (
    <div className={styles.connectButtonContainer}>
      <span className={styles.connectButtonText}>Connect wallet to send FAKE_WETH token</span>
      <button
        className={styles.connectButton}
        onClick={() => connect({ connector })}
        type="button"
      >
        Connect Wallet
      </button>
    </div>
  );
};
