'use client';

import { FC } from 'react';
import { useConnect } from 'wagmi';

/**
 *  Account status component.
 *
 *  This is only used for testing purposes.
 */
export const Status: FC = () => {
  const { status, error } = useConnect();

  return (
    <>
      <div>Status: {status}</div>
      <div>Error: {error?.message || 'n/a'}</div>
    </>
  );
}
