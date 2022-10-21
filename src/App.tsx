import { useState } from 'react';
import styles from './App.module.css';
import { CreateButton } from './components/CreateButton';
import { EmptyTaskList } from './components/EmptyTaskList';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { TaskCard } from './components/TaskCard';
import { TaskListHeader } from './components/TaskListHeader';
import { v4 as uuidV4 } from 'uuid';

import './global.css';
import { Task } from './interfaces/Task';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const completedTasks = tasks.filter((task: any) => task.isComplete);

  function handleCreateNewTask(description: string) {
    const newTask: Task = {
      id: uuidV4(),
      description,
      isComplete: false,
    }

    setTasks([...tasks, newTask]);
  }

  function handleModifyTaskStatus(taskId: string) {
    const newTaskList = tasks.map((task: Task) => {
      
      if(task.id === taskId) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      };

      return task;
    })

    setTasks(newTaskList);
  }

  function handleRemoveTask(taskId: string) {
    const newTaskList = tasks.filter((task: Task) => {
      return task.id !== taskId
    });

    setTasks(newTaskList);
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.form}>
        <Input
          onChangeTaskDescription={setNewTaskDescription}
        />
        <CreateButton
          description={newTaskDescription}
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
            {tasks.map((task: Task) => {
              return (
                <TaskCard
                  key={task.id}
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
