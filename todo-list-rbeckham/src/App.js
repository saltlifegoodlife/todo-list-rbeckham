import React, { Component, useState } from "react";

import "./App.css";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
function App(props) {
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
  console.log(tasks);
  return (
    <div>
      <NewToDo onAddTask={addTaskHandler}></NewToDo>
      {tasks.length !== 0 && (
        <ToDoList items={tasks} onUpdateTasks={updateTasksHandler} />
      )}
    </div>
  );
}

export default App;
