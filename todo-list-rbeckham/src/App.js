import React, { useState } from "react";

import "./App.css";
import NewToDo from "./components/NewToDo";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTaskHandler = (tasks) => {
    setTasks((prevTasks) => {
      return [...prevTasks, tasks];
    });
  };
  console.log(tasks);
  return (
    <div>
      <NewToDo onAddTask={addTaskHandler}></NewToDo>
    </div>
  );
}

export default App;
