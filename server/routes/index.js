import express from "express";
// TODO: import router from users.route
import toDoRouter from "./toDo.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"
router.use("/toDo", toDoRouter);
export default router;
