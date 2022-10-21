import styles from './Input.module.css';
interface InputProps {
  onChangeTaskDescription: (description: string) => void;
}

export function Input({ onChangeTaskDescription }: InputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder='Adicione uma nova tarefa'
      onChange={(event) => {
        onChangeTaskDescription(event.target.value);
      }}
    />
  )
}