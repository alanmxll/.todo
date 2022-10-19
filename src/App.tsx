import styles from './App.module.css';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  )
}
