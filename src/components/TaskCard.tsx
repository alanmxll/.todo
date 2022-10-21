import { Task } from '../interfaces/Task';
import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton,';
import { Description } from './Description';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  changeTaskStatus: (taskId: string) => void;
  removeTask: (taskId: string) => void;
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

      <Description
        task={task}
      />

      <DeleteButton
        taskId={task.id}
        removeTask={removeTask}
      />
    </div>
  )
}