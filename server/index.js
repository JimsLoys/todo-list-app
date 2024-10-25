import express from "express";
import connect from "./database/mongodb-connect.js";

import todosRouter from './routes/todos.js';
import userRouter from './routes/users.js';

const app = express();

const port = 3000;

// Use body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// use the static middleware to serve static files
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello Todo App!!!");
});

app.use("/api", todosRouter);
app.use("/api", userRouter);
connect();

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
