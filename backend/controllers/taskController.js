const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const { page = 1, limit = 5, status, sort } = req.query;
  const filter = status ? { status } : {};

  const tasks = await Task.find(filter)
    .sort(sort ? { createdAt: sort === "asc" ? 1 : -1 } : {})
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
