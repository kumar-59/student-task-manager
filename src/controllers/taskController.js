const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
