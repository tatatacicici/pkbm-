import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Users } from '../models/Users';
import { UsersAttributes } from '../models/Users';
import { Otps } from '../models/Otps';
import { v4 as uuidv4 } from 'uuid';

if (!process.env.JWT_SECRET) {
  console.error('❌ FATAL ERROR: JWT_SECRET environment variable is not set!');
  console.error('   Please set JWT_SECRET in your .env file');
  process.exit(1);
}

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
  userName?: string;
}

export class AuthService {
  async register(data: RegisterData): Promise<{ user: Partial<UsersAttributes>; token: string }> {
    const existingUser = await Users.findOne({ where: { email: data.email } });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await this.hashPassword(data.password);

    const user = await Users.create({
      id: uuidv4(),
      email: data.email,
      password: hashedPassword,
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      userName: data.userName,
      isEmailVerified: false,
      isPhoneVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

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

  async refreshToken(oldToken: string): Promise<{ token: string }> {
    try {
      const decoded = this.verifyToken(oldToken);
      const newToken = this.generateToken(decoded.userId, decoded.email);
      return { token: newToken };
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  async changePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = await Users.findByPk(userId);

    if (!user || !user.password) {
      throw new Error('User not found');
    }

    const isPasswordValid = await this.comparePassword(oldPassword, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid old password');
    }

    const hashedPassword = await this.hashPassword(newPassword);
    await user.update({ password: hashedPassword });
  }

  async resetPasswordRequest(email: string): Promise<void> {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return;
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    await Otps.create({
      id: uuidv4(),
      email,
      otp,
      type: 'PASSWORD_RESET',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    console.log(`Password reset OTP for ${email}: ${otp}`);
  }

  async resetPassword(email: string, otp: string, newPassword: string): Promise<void> {
    await this.verifyOtp(email, otp);

    const user = await Users.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = await this.hashPassword(newPassword);
    await user.update({ password: hashedPassword });

    await Otps.update(
      { isUsed: true },
      { where: { email, otp, type: 'PASSWORD_RESET' } }
    );
  }

  async sendEmailVerification(email: string): Promise<void> {
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    await Otps.create({
      id: uuidv4(),
      email,
      otp,
      type: 'EMAIL_VERIFICATION',
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    console.log(`Email verification OTP for ${email}: ${otp}`);
  }

  async verifyEmail(email: string, otp: string): Promise<void> {
    await this.verifyOtp(email, otp);

    const user = await Users.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    await user.update({ 
      isEmailVerified: true,
      emailVerifiedAt: new Date()
    });

    await Otps.update(
      { isUsed: true },
      { where: { email, otp, type: 'EMAIL_VERIFICATION' } }
    );
  }

  async verifyOtp(email: string, otp: string): Promise<{ valid: boolean }> {
    const otpRecord = await Otps.findOne({
      where: { email, otp, isUsed: false },
      order: [['createdAt', 'DESC']],
    });

    if (!otpRecord) {
      throw new Error('Invalid OTP');
    }

    if (otpRecord.expiresAt && otpRecord.expiresAt < new Date()) {
      throw new Error('OTP expired');
    }

    return { valid: true };
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
    const payload = { userId, email };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions);
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
