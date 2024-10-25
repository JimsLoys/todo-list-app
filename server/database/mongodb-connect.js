import mongoose from "mongoose";

export default function connect() {
  const database =
    "mongodb+srv://deocampoken5:cCY8leXtN8QWfXqW@todocluster.ee72w.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";
  mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "todos",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
}