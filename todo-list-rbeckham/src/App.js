import React, { useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  const deleteTaskHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const updateTaskHandler = (updateTask) => {
    const newTasks = tasks.map((task) => {
      if (task.id === updateTask.id) {
        return { ...task, task: updateTask.task };
      }
      return task;
    });
    setTasks(newTasks);
  };
  return (
    <>
      <NewToDo onAddTask={addTaskHandler}></NewToDo>
      <ToDoList
        items={tasks}
        onDeleteTask={deleteTaskHandler}
        onUpdateTask={updateTaskHandler}
      />
    </>
  );
}

export default App;
