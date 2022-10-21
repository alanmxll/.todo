import { Task } from '../interfaces/Task';
import styles from './Description.module.css';

interface DescriptionProps {
  task: Task;
}

export function Description({ task }: DescriptionProps) {
  return (
    <span className={
      task.isComplete ?
        styles.doneDescription :
        styles.description
    }>
      {task.description}
    </span>
  )
}