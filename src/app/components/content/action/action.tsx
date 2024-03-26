import { Send } from '@/app/components/content/action/send';

// context
import { BalanceContext } from '@/app/components/content/action/balance-context';

// components
import { AllBalances } from '@/app/components/content/action/all-balances';

// hooks
import { useGetAllBalances } from '@/app/components/content/action/hooks/get-all-balances.hook';

/**
 * Container for showing the balances and sending funds to the specified address.
 */
export const Action = () => {
  const {  balances, loading} = useGetAllBalances();

  if (loading) {
    // TODO: replace with proper loading spinner
    // TODO: add proper styling
    return <div>Loading balances...</div>;
  }
  // TODO: add proper styling
  return (
    <div>
      <BalanceContext.Provider value={balances}>
        <AllBalances/>
        <Send/>
      </BalanceContext.Provider>
    </div>
  );
};
