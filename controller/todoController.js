const TodoModel = require('../model/todoModel.js');

//crud
const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        return res.status(200).json({
            message: 'All Todos',
            data: todos
        });

    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error: error.message });
    }
};

const getOneTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await TodoModel.findById(id);
        return res.status(200).json({
            message: 'Todo found',
            data: todo
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching todo", error: error.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const { title, details } = req.body;
        const newTodo = await TodoModel.create({ title, details });
        return res.status(201).json({
            message: 'Todo created',
            data: newTodo
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating todo", error: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
       
        const todo = await TodoModel.findByIdAndUpdate(id, { completed: true }, { new: true });
        return res.status(200).json({
            message: 'Todo updated',
            data: todo
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error: error.message });
    }
}; 

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodoModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: 'Todo deleted'
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error: error.message });
    }
};

module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
};