import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./ToDoList.module.css";

const ToDoList = ({ onUpdateTasks, items }) => {
  //const [checked, setChecked] = useState([]);
  //   const handleCheck = (event) => {
  //     var updatedList = [...checked];
  //     if (event.target.checked) {
  //       updatedList = [...checked, event.target.value];
  //     } else {
  //       updatedList.splice(checked.indexOf(event.target.value), 1);
  //     }
  //     setChecked(updatedList);
  //   };
  const removeElement = (id) => {
    onUpdateTasks(id);
  };
  return (
    <div className={classes.task_list} style={{ display: "hidden" }}>
      <div className={classes.task_box}>
        <ul>
          {items.map((todo) => (
            <li key={todo.id} style={{ display: "flex" }}>
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
