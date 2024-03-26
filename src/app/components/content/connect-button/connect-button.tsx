'use client';

import { FC } from 'react';
import { Connector, useConnect } from 'wagmi';

/**
 * Connect button for a connector.
 */
export const ConnectButton: FC<{
  connector: Connector
}> = ({ connector }) => {
  const { connect } = useConnect();

  // TODO: add proper styling
  return (
    <button
      onClick={() => connect({ connector })}
      type="button"
    >
      Connect with {connector.name}
    </button>

  );
}
