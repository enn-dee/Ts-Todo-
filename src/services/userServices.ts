import User from '../models/user';
import { generateToken } from '../config/auth';

class UserService {
  private static instance: UserService;

  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async register(username: string, password: string) {
    const user:any = await User.create({ username, password });
    const token = generateToken(user._id.toString());
    return { user, token };
  }

  async login(username: string, password: string) {
    const user:any = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id.toString());
    return { user, token };
  }
}

export default UserService;
