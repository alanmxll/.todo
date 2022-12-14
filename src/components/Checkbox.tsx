import { CheckCircle, Circle } from 'phosphor-react';
import { Task } from '../interfaces/Task';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  task: Task;
  changeTaskStatus: (taskId: string) => void;
}

export function Checkbox({ task, changeTaskStatus }: CheckboxProps) {
  return (
    <div
      className={styles.checkbox}
      onClick={() => {
        changeTaskStatus(task.id);
      }}
    >
      {task.isComplete ? (
        <CheckCircle
          className={styles.checkboxChecked}
          size={24}
          weight="fill"
        />
      ) : (
        <Circle size={24} />
      )}
    </div>
  )
}