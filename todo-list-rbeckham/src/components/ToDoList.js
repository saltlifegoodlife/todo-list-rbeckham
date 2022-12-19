import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./ToDoList.module.css";

const ToDoList = ({ onUpdateTasks, items }) => {
  const removeElement = (id) => {
    onUpdateTasks(id);
  };
  if (!items.length) {
    return null;
  }
  return (
    <div className={classes.task_list}>
      <div className={classes.task_box}>
        <ul>
          {items.map((todo) => (
            <li key={todo.id} style={{}}>
              <div className={classes.task}>
                <input
                  id={`checkbox-${todo.id}`}
                  type="checkbox"
                  //   onChange={handleCheck}
                />
                <label htmlFor={`checkbox-${todo.id}`}>{todo.task}</label>
              </div>
              <div className={classes.edit_button}>
                <button>
                  <FontAwesomeIcon
                    className={classes.edit_icon}
                    icon={solid("pen-to-square")}
                  />
                </button>
              </div>
              <div className={classes.delete_button}>
                <button onClick={() => removeElement(todo.id)}>
                  <FontAwesomeIcon
                    className={classes.delete_icon}
                    icon={solid("trash-can")}
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
