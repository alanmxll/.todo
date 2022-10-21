import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { Task } from '../interfaces/Task';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  changeTaskStatus: (task: Task) => void;
  removeTask: (task: Task) => void;
}

export function TaskCard({
  task,
  changeTaskStatus,
  removeTask
}: TaskCardProps) {
  return (
    <div className={styles.taskCard} key={task.id}>
      <div
        className={styles.checkbox}
        onClick={() => {
          changeTaskStatus(task);
        }}
      >
        {
          task.isComplete ?
          <CheckCircle
            size={24}
            color="var(--purple)"
            weight="fill"
          /> :
          <Circle size={24} />
        }
      </div>

      <span>
        {task.description}
      </span>

      <div
        className={styles.delete}
        onClick={() => {
          removeTask(task);
        }}
      >
        <Trash size={18} /> 
      </div>
    </div>
  )
}