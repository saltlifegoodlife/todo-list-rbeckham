import query from "../db/utils.js";

const findAll = async (completed, currentDate) => {
  return query(
    "SELECT id, task FROM tasks WHERE completed = ? AND task_date = ?",
    [completed, currentDate]
  );
};

// const findOne = async (id) => {
//   return query(
//     "SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmployeeID = ?",
//     [id]
//   );
// };

const addOne = async (task) => {
  return await query("INSERT INTO tasks SET ?", [task]);
};

const updateOne = async (id, task) => {
  return await query("UPDATE tasks SET ? WHERE id = ?", [task, id]);
};

const removeOne = async (id) => {
  return await query("DELETE FROM tasks WHERE id = ?", [id]);
};

export default {
  findAll,
  // findOne,
  addOne,
  updateOne,
  removeOne,
};
