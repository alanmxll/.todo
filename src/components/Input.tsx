import styles from './Input.module.css';

export function Input() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder='Adicione uma nova tarefa'
    />
  )
}