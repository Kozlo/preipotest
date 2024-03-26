'use client';

// components
import { Account } from '@/app/components/account';
import { Status } from '@/app/components/status';
import { Content } from '@/app/components';

// styles
import styles from './page.module.css'
/**
 * Main application component
 */
function App() {
  return (
    <div className={styles.contentContainer}>
      {/*TODO: remove when done testing*/}
      <Account/>
      <br/>
      <Content/>
      {/*TODO: remove when done testing*/}
      <br/>
      <Status/>
    </div>
  );
}

export default App;
