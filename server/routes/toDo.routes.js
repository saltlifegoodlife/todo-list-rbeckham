import express from "express";
// import employees from "../controllers/employees.controller.js";
import toDo from "../controllers/toDo.controller.js";

const toDoRouter = express.Router();

toDoRouter.get("/:id&:completed?", async (req, res, next) => {
  let { id, completed } = req.params;
  console.log(completed);
  let data;
  let currentDate = new Date().toLocaleDateString();

  data = await toDo.findAll(completed, currentDate);

  res.json(data);
});

toDoRouter.post("/", async (req, res, next) => {
  let toDoBody = req.body;
  let data = await toDo.addOne(toDoBody);
  res.json(data);
});

toDoRouter.put("/:id", async (req, res, next) => {
  let { id } = req.params;
  let toDoBody = req.body;
  let data = await toDo.updateOne(id, toDoBody);
  res.json(data);
});

toDoRouter.delete("/:id", async (req, res, next) => {
  let { id } = req.params;
  let data = await toDo.removeOne(id);
  res.json(data);
});

export default toDoRouter;
