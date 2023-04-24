import React, { useEffect, useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import Completed from "./components/modal/Completed";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const getTasksHandler = (id, completed) => {
    console.log(completed);
    fetch(`http://localhost:5002/api/toDo/${id}&${completed}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        if (completed === 1) {
          console.log("completed");
          setCompletedTasks(result);
        } else {
          setTasks(result);
        }
      })
      .catch((err) => {
        console.err(err);
      });
  };

  const addTaskHandler = (task) => {
    // setTasks((prevTasks) => {
    //   return [...prevTasks, task];
    // });
    fetch(`http://localhost:5002/api/toDo/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: task.id,
        task: task.task,
        task_date: task.date,
        completed: task.completed,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        getTasksHandler(0, 0);
      });
  };

  const updateTaskHandler = (updateTask) => {
    console.log(updateTask);
    let obj = updateTask.completed
      ? JSON.stringify({
          completed: updateTask.completed,
        })
      : JSON.stringify({
          task: updateTask.task,
        });
    fetch(`http://localhost:5002/api/toDo/${updateTask.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: obj,
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        getTasksHandler(0, 0);
      });
  };

  const deleteTaskHandler = (id) => {
    console.log(id);
    fetch(`http://localhost:5002/api/toDo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        getTasksHandler(0, 0);
      });
  };

  const modalHandler = () => {
    if (showModal) {
      setShowModal(!showModal);
    } else {
      setShowModal(!showModal);
      let completed = 1;
      let id = 0;
      getTasksHandler(id, completed);
    }
  };

  useEffect(() => {
    getTasksHandler();
  }, []);

  return (
    <>
      <NewToDo onAddTask={addTaskHandler}></NewToDo>
      <button className="complete-btn" onClick={modalHandler}>
        Completed Tasks
      </button>
      <ToDoList
        items={tasks}
        onDeleteTask={deleteTaskHandler}
        onUpdateTask={updateTaskHandler}
      />
      {showModal && (
        <Completed onClose={modalHandler} complete={completedTasks} />
      )}
    </>
  );
}

export default App;
