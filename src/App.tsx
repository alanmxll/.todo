import { FormEvent, useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form';
import { Header } from './components/Header';

import './global.css';

export function App() {
  const [tasks, newTasks] = useState([]);

  function handleCreateNewTask(event: FormEvent) {
    console.log(event);
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <Form onSubmit={() => {}}/>
    </div>
  )
}
