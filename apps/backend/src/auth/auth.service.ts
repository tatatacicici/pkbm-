import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Users } from '../models/Users';
import { UsersAttributes } from '../models/Users';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export class AuthService {
  async login(email: string, password: string): Promise<{ user: Partial<UsersAttributes>; token: string }> {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (!user.password) {
      throw new Error('User has no password set');
    }

    const isPasswordValid = await this.comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken(user.id, user.email);

    const userWithoutPassword = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      avatar: user.avatar,
      phoneNumber: user.phoneNumber,
      userName: user.userName,
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return { user: userWithoutPassword, token };
  }

  async getUserById(userId: string): Promise<Partial<UsersAttributes> | null> {
    const user = await Users.findByPk(userId);

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      avatar: user.avatar,
      phoneNumber: user.phoneNumber,
      userName: user.userName,
      isEmailVerified: user.isEmailVerified,
      isPhoneVerified: user.isPhoneVerified,
      bio: user.bio,
      gender: user.gender,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    const isPlainText = !hashedPassword.startsWith('$2a$') && !hashedPassword.startsWith('$2b$');
    
    if (isPlainText) {
      return plainPassword === hashedPassword;
    }
    
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  generateToken(userId: string, email: string): string {
    return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  }

  verifyToken(token: string): { userId: string; email: string } {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
      return decoded;
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }
}
