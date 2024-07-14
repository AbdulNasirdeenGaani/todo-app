// module imports
import express from "express";
import bodyParser from "body-parser";
import connectToMongoDb from "./db/connectToMongoDb.js";
import todoRouter from "./routes/todoRoutes.js";
import Dotenv from "dotenv";

// configure environment variable
Dotenv.config();

// Initialise app
const app = express();

// Database connections
connectToMongoDb();

// view engine
app.set("view engine", "ejs");

// midlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRouter);

export default app;
