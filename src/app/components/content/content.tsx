'use client';

import { FC } from 'react';
import { useAccount, useConnect } from 'wagmi';

// components
import { ConnectButton } from '@/app/components/content/connect-button/connect-button';
import { Action } from '@/app/components/content/action';

// constants
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
        <Action/>
      )}
    </div>
  );
}
