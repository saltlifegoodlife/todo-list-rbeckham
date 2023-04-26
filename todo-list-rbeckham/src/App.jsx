import React, { useEffect, useState } from "react";
import NewToDo from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import Completed from "./components/modal/Completed";
import "./App.css";
import LoginButton from "./components/buttons/loginButton";
import LogoutButton from "./components/buttons/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  const getTasksHandler = (id, completed) => {
    let email = user.email;
    console.log(completed);
    console.log(email);
    fetch(`http://localhost:5002/api/toDo/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        completed: completed,
        email: email,
      }),
    })
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
        task: task.task,
        task_date: task.date,
        completed: task.completed,
        email: user.email,
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
    if (isAuthenticated) {
      console.log("User has logged in");
      getTasksHandler(0, 0);
    }
  }, [isAuthenticated]);

  return (
    <>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <>
          <div className="div-top">
            <p className="name">Hi, {user.given_name}!</p>
            <LogoutButton />
          </div>

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
      )}
    </>
  );
}

export default App;
