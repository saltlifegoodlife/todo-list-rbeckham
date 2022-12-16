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
          <div className={classes.div_input}>
            <input
              type="text"
              value={enteredTask}
              onChange={taskChangeHandler}
              placeholder="ENTER TASK"
            />
            <div className={classes.div_button}>
              <button type="submit">
                <FontAwesomeIcon
                  className={classes.fontAwesome}
                  icon={solid("square-plus")}
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
