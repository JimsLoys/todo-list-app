import express from 'express';
import Todo from '../models/todos.js'; 

const router = express.Router();


router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find(); 
    res.status(200).json(todos); 
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
});


router.get('/todos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id); 
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todo' });
  }
});


router.post('/todos', async (req, res) => {
  const { user, title, description } = req.body; 
  try {
    const newTodo = new Todo({ user, title, description });
    const savedTodo = await newTodo.save(); 
    res.status(201).json(savedTodo); 
  } catch (error) {
    res.status(500).json({ error: 'Error creating todo' });
  }
});


router.put('/todos/:id', async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body; 
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description }, 
      { new: true } 
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo); 
  } catch (error) {
    res.status(500).json({ error: 'Error updating todo' });
  }
});


router.delete('/todos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id); 
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted' }); 
  } catch (error) {
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

export default router;
