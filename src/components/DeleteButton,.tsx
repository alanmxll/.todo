import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';

interface DeleteButtonProps {
  taskId: string;
  removeTask: (taskId: string) => void;
}

export function DeleteButton({ taskId, removeTask }: DeleteButtonProps) {
  return (
    <div
      className={styles.delete}
      onClick={() => {
        removeTask(taskId);
      }}
    >
      <Trash size={18} /> 
    </div>
  )
}