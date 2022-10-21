import { useState } from 'react';
import styles from './App.module.css';
import { CreateButton } from './components/CreateButton';
import { EmptyTaskList } from './components/EmptyTaskList';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskCard } from './components/TaskCard';
import { TaskListHeader } from './components/TaskListHeader';

import './global.css';

export function App() {
  const [tasks, setTasks] = useState<any>([]);
  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((task: any) => task.isComplete);

  function handleCreateNewTask(description: string) {
    const newTask = {
      id: Math.random(),
      description,
      isComplete: false,
    }

    setTasks([...tasks, newTask]);
  }

  function handleModifyTaskStatus(task: any) {

    const newTaskList = tasks.map((t: any) => {
      
      if(t.id === task.id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      };

      return t;
    })

    setTasks(newTaskList);
  }

  function handleRemoveTask(taskToRemove: any) {
    const newTaskList = tasks.filter((task: any) => {
      return task.id !== taskToRemove.id
    });

    setTasks(newTaskList);
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.form}>
        <Input
          onChangeTaskDescription={setNewTask}
        />
        <CreateButton
          description={newTask}
          createTask={handleCreateNewTask}
        />
      </div>

      <TaskListHeader
        tasksLength={tasks.length}
        completedTasksLength={completedTasks.length}
      />

      {
        tasks.length === 0 ?
        (
          <EmptyTaskList />
        ) :
        (
          <div className={styles.taskList}>
            {tasks.map((task: any) => {
              return (
                <TaskCard
                  task={task}
                  changeTaskStatus={handleModifyTaskStatus}
                  removeTask={handleRemoveTask}
                />
              )
            })}
          </div>
        )
      }

    </div>
  )
}
