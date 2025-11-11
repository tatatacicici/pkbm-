import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersAttributes {
  id: string;
  email: string;
  password?: string;
  fullName: string;
  emailVerifiedAt?: Date;
  avatar?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  avatarId?: number;
  phoneVerifiedAt?: Date;
  gender?: string;
  userName?: string;
  isBanned?: boolean;
  isTesting?: boolean;
  status?: string;
  onlineStatus?: "ONLINE" | "OFFLINE";
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  bio?: string;
}

export type UsersPk = "id";
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes = "password" | "emailVerifiedAt" | "avatar" | "phoneNumber" | "deletedAt" | "avatarId" | "phoneVerifiedAt" | "gender" | "userName" | "isBanned" | "isTesting" | "status" | "onlineStatus" | "bio";
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  id!: string;
  email!: string;
  password?: string;
  fullName!: string;
  emailVerifiedAt?: Date;
  avatar?: string;
  phoneNumber?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  avatarId?: number;
  phoneVerifiedAt?: Date;
  gender?: string;
  userName?: string;
  isBanned?: boolean;
  isTesting?: boolean;
  status?: string;
  onlineStatus?: "ONLINE" | "OFFLINE";
  isEmailVerified!: boolean;
  isPhoneVerified!: boolean;
  bio?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name'
    },
    emailVerifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'email_verified_at'
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'phone_number'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    avatarId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'avatar_id'
    },
    phoneVerifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'phone_verified_at'
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'user_name'
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'is_banned'
    },
    isTesting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'is_testing'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    onlineStatus: {
      type: DataTypes.ENUM("ONLINE","OFFLINE"),
      allowNull: true,
      defaultValue: "OFFLINE",
      field: 'online_status'
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_email_verified'
    },
    isPhoneVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_phone_verified'
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false
  });
  }
}
