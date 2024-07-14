import moment from "moment";
import Todo from "../models/Todo.js";

export const homeController = async (req, res, next) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    res.locals.moment = moment;

    res.render("index", { title: "List Todo", todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTodoController = (req, res, next) => {
  try {
    res.render("newTodo", { title: "Add Todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTodoController = async (req, res, next) => {
  const { id } = req.query;
  try {
    const todo = await Todo.findById(id);
    res.render("updateTodo", { title: "Update Todo", todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTodoController = (req, res, next) => {
  const { id } = req.query;
  try {
    res.render("deleteTodo", { title: "Delete Todo", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postTodoController = async (req, res, next) => {
  try {
    const { title, desc } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ message: "title is required so do the needful" });
    }

    const newTodo = new Todo({ title, desc });
    await newTodo.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.redirect("/");
};

export const postUpdateTodoController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo.title = title;
    todo.desc = desc;

    todo.save();

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const confirmDeleteTodo = async (req, res, next) => {
  try {
    const { id, confirm } = req.query;

    if (confirm === "yes") {
      await Todo.findByIdAndDelete(id);
    }

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
