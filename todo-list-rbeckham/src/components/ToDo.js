import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import classes from "./ToDo.module.css";

const ToDo = ({ deleteTask, updateTask, todo }) => {
  const [edit, setEdit] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const updateChangeHandler = (event) => {
    setUpdatedTask(event.target.value);
  };
  const checkboxHandler = (e) => {
    e.preventDefault();
    const taskData = {
      id: todo.id,
      task: updatedTask,
      completed: 1,
    };
    updateTask(taskData);
  };

  const updateTaskHandler = (e) => {
    e.preventDefault();
    const taskData = {
      id: todo.id,
      task: updatedTask,
    };
    updateTask(taskData);
    setEdit(!edit);
    setUpdatedTask("");
  };

  const removeElement = (id) => {
    deleteTask(id);
  };

  return (
    <div className={classes.todo}>
      {!edit ? (
        <div className={classes.todo_item}>
          <div className={classes.task}>
            {/* Warning error being thrown due to checkbox input not having default
            value, will finish on next ticket. */}
            <input
              id={`checkbox-${todo.id}`}
              type="checkbox"
              value=""
              onChange={checkboxHandler}
            />
            <label htmlFor={`checkbox-${todo.id}`}>{todo.task}</label>
          </div>
          <div className={classes.edit_button}>
            <button onClick={handleEdit}>
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
        </div>
      ) : (
        <div className={classes.todo_item}>
          <div className={classes.task}>
            <input
              className={classes.edit_input}
              type="text"
              value={updatedTask || ""}
              onChange={updateChangeHandler}
            />
          </div>
          <div className={classes.edit_button}>
            <button onClick={updateTaskHandler}>
              <FontAwesomeIcon
                className={classes.save_icon}
                icon={solid("square-check")}
              />
            </button>
          </div>
          <div className={classes.delete_button}>
            <button onClick={handleEdit}>
              <FontAwesomeIcon
                className={`${classes.delete_icon} ${classes.cancel_icon}`}
                icon={solid("square-xmark")}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDo;
