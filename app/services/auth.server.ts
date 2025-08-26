// app/services/auth.server.ts
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || '';

export interface AuthResult {
  success: boolean;
  user?: IUser;
  token?: string;
  error?: string;
}

export async function registerUser(username: string, email: string, password: string): Promise<AuthResult> {
  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return {
        success: false,
        error: 'User already exists with this email or username'
      };
    }

    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    return {
      success: true,
      user,
      token
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
}

export async function loginUser(email: string, password: string): Promise<AuthResult> {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    return {
      success: true,
      user,
      token
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
}