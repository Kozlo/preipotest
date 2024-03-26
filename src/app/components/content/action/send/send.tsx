import { FC } from 'react';
import {
  type BaseError,
  useAccount,
  // useSendTransaction,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import { parseEther } from 'viem';

// constants
import {
  abi,
  RECIPIENT_ADDRESS,
  TOKEN_ADDRESS,
} from '@/app/constants';

// types
import { AccountAddress, BalanceValue } from '@/app/types/index.type';

// styles
import styles from './send.module.scss';

/**
 * Sends the funds to the recipient.
 */
export const Send: FC<{
  balance: BalanceValue
}> = ({ balance }) => {
  const account = useAccount();
  // TODO: replace with the actual address
  const accountAddress = account && account.addresses ? account?.addresses[0] : '';
  const {
    data: hash,
    error,
    isPending,
    writeContract,
  } = useWriteContract();
  // sendTransaction,
  // } = useSendTransaction();
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

    // sendTransaction({ to: RECIPIENT_ADDRESS, value: parseEther(String(balance)) });
    writeContract({
      abi,
      // TODO: replace with the actual address
      address: accountAddress as AccountAddress,
      functionName: 'transferFrom',
      args: [
        // TODO: check if these are correct
        TOKEN_ADDRESS,
        RECIPIENT_ADDRESS,
        parseEther(String(balance)),
      ],
    })
  };

  return (
    <div className={styles.sendButtonContainer}>
      <button
        className={styles.sendButton}
        onClick={onClick}
        disabled={isPending}
      >
        {isPending ? 'Confirming...' : 'Send'}
      </button>
      {hash && <div className={styles.info}>Transaction Hash: {hash}</div>}
      {isConfirming && <div className={styles.info}>Waiting for confirmation...</div>}
      {isConfirmed && <div className={styles.info}>Transaction confirmed.</div>}
      {error && (
        <div className={styles.error}>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </div>
  );
};
