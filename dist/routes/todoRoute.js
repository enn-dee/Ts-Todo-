"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../config/auth");
const todoServices_1 = __importDefault(require("../services/todoServices"));
const router = (0, express_1.Router)();
const todoService = todoServices_1.default.getInstance();
router.post("/todos", auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const todo = yield todoService.createTodo(title, description);
    res.status(201).json(todo);
}));
router.get("/todos", auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todoService.getTodos();
    res.json(todos);
}));
router.get("/todos/:id", auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoService.getTodoById(req.params.id);
    if (!todo)
        return res.status(404).send("Todo not found");
    res.json(todo);
}));
router.put("/todos/:id", auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTodo = yield todoService.updateTodo(req.params.id, req.body);
    if (!updatedTodo)
        return res.status(404).send("Todo not found");
    res.json(updatedTodo);
}));
router.delete("/todos/:id", auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedTodo = yield todoService.deleteTodo(req.params.id);
    if (!deletedTodo)
        return res.status(404).send("Todo not found");
    res.json(deletedTodo);
}));
exports.default = router;
