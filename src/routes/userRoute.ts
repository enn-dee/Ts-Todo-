import { Router } from 'express';
import UserService from '../services/userServices';

const router = Router();
const userService = UserService.getInstance();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await userService.register(username, password);
    res.status(201).json(result);
  } catch (err:any) {
    res.status(400).send(err.message);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await userService.login(username, password);
    res.json(result);
  } catch (err:any) {
    res.status(400).send(err.message);
  }
});

export default router;
