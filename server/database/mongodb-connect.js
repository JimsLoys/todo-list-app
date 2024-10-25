import mongoose from "mongoose";

export default function connect() {
  const database =
    "mongodb+srv://deocampoken5:BbGhQIObctiEi0Tj@todocluster.ee72w.mongodb.net/?retryWrites=true&w=majority&appName=TodoCluster";
  

  mongoose
    .connect(database, {
      dbName: "todos",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
}
