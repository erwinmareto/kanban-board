const TaskService = require("../services/taskService");

class TaskController {

    static getAllTasks = async (req, res, next) => {
        try {
            const tasks = await TaskService.getAll();
            return res
                .status(200)
                .json({ message: "Successfully retrieved tasks data", data: tasks });
        } catch (error) {
            next(error);
        }
    };

    static getTask = async (req, res, next) => {
        try {
            const task = await TaskService.getById(req.params.id);
            return res
                .status(200)
                .json({ message: "Successfully retrieved task data", data: task });
        } catch (error) {
            next(error);
        }
    };
    
    static addTask = async (req, res, next) => {
        try {
            const task = await TaskService.add(req.body);
            return res
                .status(201)
                .json({ message: "Successfully created task", data: task });
        } catch (error) {
            next(error);
        }
    };
    
    static updateTask = async (req, res, next) => {
        try {
            const { id } = req.params;
            const task = await TaskService.update(id, req.body);
            return res
                .status(200)
                .json({ message: "Successfully updated task", data: task });
        } catch (error) {
            next(error);
        }
    }

    static deleteTask = async (req, res, next) => {
        try {
            const { id } = req.params;
            const task = await TaskService.delete(id);
            return res
                .status(200)
                .json({ message: "Successfully deleted task", data: task });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TaskController