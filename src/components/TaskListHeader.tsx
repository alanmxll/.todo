import styles from './TaskListHeader.module.css';

interface TaskListHeaderProps {
  tasksLength: number;
  completedTasksLength: number;
}

function CreatedTasks(props: any) {
  return (
    <div className={styles.createdCounterSpan}>
      Tarefas criadas
      <span className={styles.createdCounter}>
        {props.tasksLength}
      </span>
    </div>
  )
}

function CompletedTasks(props: any) {
  const isTasksEmpty = props.tasksLength === 0;

  return (
    <div className={styles.completedCounterSpan}>
      Concluídas
      {isTasksEmpty ? (
        <span className={styles.createdCounter}>
          {props.tasksLength}
        </span> 
      ) : (
        <span className={styles.createdCounter}>
          {props.completedTasksLength} de {props.tasksLength}
        </span>
      )}
    </div>
  )
}

export function TaskListHeader({
  tasksLength,
  completedTasksLength
}: TaskListHeaderProps) {

  return (
    <div className={styles.headerList}>
      <CreatedTasks
        tasksLength={tasksLength}
      />

      <CompletedTasks
        tasksLength={tasksLength}
        completedTasksLength={completedTasksLength}
      />
    </div>
  )
}