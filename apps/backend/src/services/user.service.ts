import { Users } from '../models/Users';
import { UsersAttributes } from '../models/Users';

export class UserService {
  async getUserProfile(userId: string): Promise<Partial<UsersAttributes> | null> {
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

  async updateUserProfile(userId: string, data: Partial<UsersAttributes>): Promise<Partial<UsersAttributes>> {
    const user = await Users.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const allowedFields: (keyof UsersAttributes)[] = [
      'fullName', 'avatar', 'phoneNumber', 'userName', 'bio', 'gender'
    ];

    const updateData: any = {};
    for (const field of allowedFields) {
      if (data[field] !== undefined) {
        updateData[field] = data[field];
      }
    }

    await user.update(updateData);

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
}
