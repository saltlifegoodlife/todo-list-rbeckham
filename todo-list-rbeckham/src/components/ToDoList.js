import React from "react";

import classes from "./ToDoList.module.css";
import ToDo from "./ToDo";

const ToDoList = ({ onDeleteTask, onUpdateTask, items }) => {
  if (!items.length) {
    return null;
  }
  return (
    <div className={classes.task_list}>
      <div className={classes.task_box}>
        <ul>
          {items.map((todo) => (
            <li key={todo.id}>
              <ToDo
                todo={todo}
                deleteTask={onDeleteTask}
                updateTask={onUpdateTask}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
