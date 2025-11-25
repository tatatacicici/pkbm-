import { Users } from '../models/tables/Users';
import { UsersAttributes } from '../models/tables/Users';

export class UserService {
  async isProfileCompleted(userId: string): Promise<boolean> {
    const user = await Users.findByPk(userId);
    if (!user) throw new Error('User not found');

    const requiredFields: (keyof UsersAttributes)[] = [
      'fullName',
      'phoneNumber',
      'gender',
      'userName',
    ];

    return requiredFields.every(field => !!user[field]);
  }
  async getUserProfile(userId: string): Promise<Partial<UsersAttributes> | null> {
    const user = await Users.findByPk(userId);
    if (!user) return null;

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
 
  async updateUserProfile(userId: string, data: Partial<UsersAttributes>) {
    const user = await Users.findByPk(userId);
    if (!user) throw new Error('User not found');

    const allowed: (keyof UsersAttributes)[] = [
      'fullName',
      'avatar',
      'phoneNumber',
      'userName',
      'bio',
      'gender',
    ];

    const updateData: any = {};
    for (const key of allowed) {
      if (data[key] !== undefined) updateData[key] = data[key];
    }

    await user.update(updateData);
    return this.getUserProfile(userId); // return versi rapi
  }
}
