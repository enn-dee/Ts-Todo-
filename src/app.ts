import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todoRoute';
import userRoutes from './routes/userRoute';
import connectDB from './config/database';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', todoRoutes);
app.use('/api', userRoutes);

connectDB();

export default app;
