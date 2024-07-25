const Schema = require('../models/model'); // Ensure this path is correct

const Home = async (req, res) => {
    return res.json({ msg: "Hello!" });
};

// Get All Tasks 
const getAll = async (req, res) => {
    try {
        // Get List by Date Added
        const tasks = await Schema.find({}).sort({ createdAt: -1 }); // Ensure 'createdAt' field is used for sorting
        res.status(200).send(tasks);
    } catch (err) {
        res.status(400).json({ msg: `Error loading list: ${err.message}` });
    }
};

// Search By ID
const getById = async (req, res) => {
    try {
        const task = await Schema.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Task Not Found!' });
        }
        res.status(200).send(task);
    } catch (err) {
        res.status(400).json({ msg: `Task Not Found: ${err.message}` });
    }
};

// Add New Task 
const newTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newItem = new Schema({ title, description });
        const saved = await newItem.save();
        if (saved) {
            return res.status(201).json({ msg: `New Task Added`, task: saved });
        }
    } catch (err) {
        res.status(400).json({ msg: `Couldn't Add Item: ${err.message}` });
    }
};

// Update Task 
const updateTasks = async (req, res) => {
    try {
        const updatedTask = await Schema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ msg: 'Task Not Found!' });
        }
        res.status(200).json({ msg: `Success!`, task: updatedTask });
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
};

// Delete Task
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Schema.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ msg: 'Task Not Found!' });
        }
        res.status(200).json({ msg: 'Deleted!' });
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
};

// Mark a Task Done 
const markDone = async (req, res) => {
    try {
        const task = await Schema.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Task Not Found!' });
        }
        task.done = true;
        await task.save();
        res.status(200).json({ msg: 'Task Complete!', task });
    } catch (err) {
        res.status(400).send({ msg: err.message });
    }
};

module.exports = {
    Home,
    getAll,
    getById,
    newTask,
    updateTasks,
    deleteTask,
    markDone
};