import styles from './EmptyTaskList.module.css';

import clipboard from '../assets/clipboard.svg';

export function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboard} alt="Clipboard" />
      <span className={styles.emptyTaskListSpanBold}>
        Você ainda não tem tarefas cadastradas
      </span>
      <span className={styles.emptyTaskListSpanRegular}>
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}