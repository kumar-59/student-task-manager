const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send("Student Task Manager API Running");
});

module.exports = app;
