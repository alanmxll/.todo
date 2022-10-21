import { Trash } from 'phosphor-react';
import { Task } from '../interfaces/Task';
import { Checkbox } from './Checkbox';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  changeTaskStatus: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

export function TaskCard({
  task,
  changeTaskStatus,
  removeTask
}: TaskCardProps) {
  return (
    <div className={styles.taskCard}>
      <Checkbox
        task={task}
        changeTaskStatus={changeTaskStatus}
      />

      <span>{task.description}</span>

      <div
        className={styles.delete}
        onClick={() => {
          removeTask(task.id);
        }}
      >
        <Trash size={18} /> 
      </div>
    </div>
  )
}