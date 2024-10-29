import express from "express";
import connect from "./database/mongodb-connect.js";
import todosRouter from './routes/todos.js';
import userRouter from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("frontend"));

app.get("/", (req, res) => {
  res.sendFile('login.html', { root: 'frontend' });
});

app.use("/api", todosRouter);
app.use("/api", userRouter);

app.use((req, res, next) => {
  res.status(404).sendFile('404.html', { root: 'frontend' });
});

connect();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
