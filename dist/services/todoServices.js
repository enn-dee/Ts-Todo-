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
const todo_1 = __importDefault(require("../models/todo"));
class TodoService {
    constructor() { }
    static getInstance() {
        if (!TodoService.instance) {
            TodoService.instance = new TodoService();
        }
        return TodoService.instance;
    }
    createTodo(title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todo_1.default.create({ title, description });
        });
    }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todo_1.default.find();
        });
    }
    getTodoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todo_1.default.findById(id);
        });
    }
    updateTodo(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todo_1.default.findByIdAndUpdate(id, updateData, { new: true });
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield todo_1.default.findByIdAndDelete(id);
        });
    }
}
exports.default = TodoService;
