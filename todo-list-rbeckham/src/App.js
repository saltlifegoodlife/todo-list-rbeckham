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
  const updateTasksHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  return (
    <>
      <NewToDo onAddTask={addTaskHandler}></NewToDo>
      <ToDoList items={tasks} onUpdateTasks={updateTasksHandler} />
    </>
  );
}

export default App;
