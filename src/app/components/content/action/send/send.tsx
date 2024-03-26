import { FC } from 'react';
import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { parseEther } from 'viem';

// constants
import { RECIPIENT_ADDRESS } from '@/app/constants';

// types
import { BalanceValue } from '@/app/types/index.type';

/**
 * Sends the funds to the recipient.
 */
export const Send: FC<{
  balance: BalanceValue
}> = ({ balance }) => {
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({ hash });

  /**
   * Send button click handler.
   */
  const onClick = () => {
    if (isPending) {
      return;
    }

    // TODO: send the token not ETH instead
    sendTransaction({ to: RECIPIENT_ADDRESS, value: parseEther(String(balance)) });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.125rem',
    }}>
      <button
        onClick={onClick}
        disabled={isPending}
      >
        {isPending ? 'Confirming...' : 'Send'}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </div>
  );
};
