import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import classes from "./NewToDo.module.css";

const NewToDo = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      task: enteredTask,
      id: Math.random().toString(),
    };

    props.onAddTask(taskData);
    setEnteredTask("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <p>Today's Tasks</p>
        <div className={classes.task_box}>
          <div>
            <label>ENTER TASK</label>
          </div>
          <div style={{ margin: "5px 0 0 0" }}>
            <input
              type="text"
              value={enteredTask}
              onChange={taskChangeHandler}
              placeholder="ENTER TASK"
            />
            <div style={{ float: "right" }}>
              <button type="submit">
                <FontAwesomeIcon
                  icon={solid("square-plus")}
                  style={{ float: "right", fontSize: "35px" }}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewToDo;
