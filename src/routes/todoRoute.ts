import { Router } from "express";
import { authenticateToken } from "../config/auth";
import TodoService from "../services/todoServices";

const router = Router();
const todoService = TodoService.getInstance();

router.post("/todos", authenticateToken, async (req, res) => {
  const { title, description } = req.body;
  const todo = await todoService.createTodo(title, description);
  res.status(201).json(todo);
});

router.get("/todos", authenticateToken, async (req, res) => {
  const todos = await todoService.getTodos();
  res.json(todos);
});

router.get("/todos/:id", authenticateToken, async (req, res) => {
  const todo = await todoService.getTodoById(req.params.id);
  if (!todo) return res.status(404).send("Todo not found");
  res.json(todo);
});

router.put("/todos/:id", authenticateToken, async (req, res) => {
  const updatedTodo = await todoService.updateTodo(req.params.id, req.body);
  if (!updatedTodo) return res.status(404).send("Todo not found");
  res.json(updatedTodo);
});

router.delete("/todos/:id", authenticateToken, async (req, res) => {
  const deletedTodo = await todoService.deleteTodo(req.params.id);
  if (!deletedTodo) return res.status(404).send("Todo not found");
  res.json(deletedTodo);
});

export default router;
