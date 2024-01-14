const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')

router.get('/', TaskController.getAllTasks)
router.get('/:id', TaskController.getTask)
router.post('/', TaskController.addTask)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router