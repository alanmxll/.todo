import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { Task } from '../interfaces/Task';
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
    <div className={styles.taskCard} key={task.id}>
      <div
        className={styles.checkbox}
        onClick={() => {
          changeTaskStatus(task.id);
        }}
      >
        {task.isComplete ? (
          <CheckCircle
            size={24}
            color="var(--purple)"
            weight="fill"
          />
        ) : (
          <Circle size={24} />
        )}
      </div>

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