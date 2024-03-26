'use client';

// components
import { Account } from '@/app/components/account';
import { Status } from '@/app/components/status';
import { Content } from '@/app/components';

/**
 * Main application component
 */
function App() {
  return (
    <>
      {/*TODO: remove when done testing*/}
      <Account/>
      <br/>
      <Content/>
      {/*TODO: remove when done testing*/}
      <br/>
      <Status/>
    </>
  );
}

export default App;
