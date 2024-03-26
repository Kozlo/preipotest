'use client';

import { FC } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { AllBalances } from '@/app/components/content/all-balances/all-balances';
import { ConnectButton } from '@/app/components/content/connect-button/connect-button';

const META_MASK = 'MetaMask';

export const Content: FC = () => {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();

  // TODO: find a better way to get the metamask connector
  const metamaskConnector = connectors
    .find((connector) => connector.name === META_MASK);

  // TODO: add proper styling
  return (
    <div>
      {metamaskConnector && account.status !== 'connected' ? (
        <ConnectButton
          connector={metamaskConnector}
        />
      ) : (
        <AllBalances/>
      )}
    </div>
  );
}
