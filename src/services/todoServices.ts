import Todo from '../models/todo';

class TodoService {
  private static instance: TodoService;

  private constructor() {}

  public static getInstance(): TodoService {
    if (!TodoService.instance) {
      TodoService.instance = new TodoService();
    }
    return TodoService.instance;
  }

  async createTodo(title: string, description?: string) {
    return await Todo.create({ title, description });
  }

  async getTodos() {
    return await Todo.find();
  }

  async getTodoById(id: string) {
    return await Todo.findById(id);
  }

  async updateTodo(id: string, updateData: Partial<{ title: string; description: string; completed: boolean }>) {
    return await Todo.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteTodo(id: string) {
    return await Todo.findByIdAndDelete(id);
  }
}

export default TodoService;
