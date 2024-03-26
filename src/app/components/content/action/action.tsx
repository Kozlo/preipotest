import { Send } from '@/app/components/content/action/send';

// context
import { BalanceContext } from '@/app/components/content/action/balance-context';

// components
import { AllBalances } from '@/app/components/content/action/all-balances';

// hooks
import { useGetAllBalances } from '@/app/components/content/action/hooks/get-all-balances.hook';
import { TOKEN_NAME } from '@/app/constants';

/**
 * Container for showing the balances and sending funds to the specified address.
 */
export const Action = () => {
  const { balances, loading } = useGetAllBalances();

  if (loading || !balances) {
    // TODO: replace with proper loading spinner
    // TODO: add proper styling
    return <div>Loading balances...</div>;
  }

  // TODO: add proper styling
  return (
    <BalanceContext.Provider value={balances}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <AllBalances/>
        <Send balance={balances[TOKEN_NAME].balance}/>
      </div>
    </BalanceContext.Provider>

  );
};
