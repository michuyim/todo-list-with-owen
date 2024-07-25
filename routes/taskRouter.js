const express = require('express');
const controller = require('../controllers/taskControllers'); // Ensure this path is correct
const { validateToDoList, ToDoListValidator } = require('../middleware/listValidator');
const router = express.Router();

// Define routes
router.get('/', controller.Home); // Home route

router.get('/tasks', controller.getAll); // Get all tasks

router.get('/tasks/:id', controller.getById); // Get task by ID

router.post('/add-task', validateToDoList, ToDoListValidator, controller.newTask); // Add new task

router.put('/tasks/:id', validateToDoList, ToDoListValidator, controller.updateTasks); // Update task by ID

router.delete('/tasks/:id', controller.deleteTask); // Delete task by ID

router.put('/tasks/:id/done', controller.markDone); // Mark task as done by ID

module.exports = router;