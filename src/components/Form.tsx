import { Button } from "./Button";
import { Input } from "./Input";

import styles from './Form.module.css';

interface FormProps {
  onSubmit: (description: string) => void;
}

export function Form({ onSubmit }: FormProps) {
  return (
    <form className={styles.form} onSubmit={() => {}}>
      <Input />

      <Button />
    </form>
  )
}