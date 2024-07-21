import mongoose, { Document, Schema } from 'mongoose';

interface ITodo extends Document {
  title: string;
  description: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);
export default Todo;
