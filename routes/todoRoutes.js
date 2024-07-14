import express from "express";
import {
  addTodoController,
  confirmDeleteTodo,
  deleteTodoController,
  homeController,
  postTodoController,
  postUpdateTodoController,
  updateTodoController,
} from "../controllers/todoControllers.js";

const todoRouter = express.Router();

// api end-points
todoRouter.get("/", homeController);
todoRouter.get("/add-todo", addTodoController);
todoRouter.get("/update-todo", updateTodoController);
todoRouter.get("/delete-todo", deleteTodoController);

todoRouter.post("/add-todo", postTodoController);
todoRouter.post("/update-todo/:id", postUpdateTodoController);
todoRouter.get("/confirm-delete", confirmDeleteTodo);

export default todoRouter;
