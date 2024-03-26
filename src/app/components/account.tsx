'use client';

import { FC } from 'react';
import { useAccount,  useDisconnect } from 'wagmi';

/**
 * Account component.
 *
 * This is only used for testing purposes.
 */
export const Account: FC = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <h2>Account</h2>
      <div>
        status: {account.status}
        <br/>
        addresses: {JSON.stringify(account.addresses)}
        <br/>
        chainId: {account.chainId}
      </div>
      {account.status === 'connected' && (
        <button type="button" onClick={() => disconnect()}>
          Disconnect
        </button>
      )}
    </div>
  );
}
