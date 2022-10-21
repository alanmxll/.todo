import { PlusCircle } from 'phosphor-react';
import styles from './CreateButton.module.css';

interface CreateButtonProps {
  description: string;
  createTask: (description: string) => void;
}

export function CreateButton({ createTask, description }: CreateButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        createTask(description);
      }}
    >
      <span>Criar</span>
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}