import { AllBalances } from '@/app/components/content/send/all-balances';
import { Send } from '@/app/components/content/action/send';

/**
 * Container for showing the balances and sending funds to the specified address.
 */
export const Action = () => {
  // TODO: add proper styling
  return (
    <div>
      <AllBalances/>
      <Send/>
    </div>
  );
}
