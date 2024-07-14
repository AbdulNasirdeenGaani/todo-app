import mongoose from "mongoose";

// Database Schema
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: String,
  },
  {
    timestamps: true,
  }
);

// Database Model
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
