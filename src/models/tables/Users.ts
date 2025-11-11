import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersAttributes {
  id?: string;
  email: string;
  password?: string;
  full_name: string;
  email_verified_at?: Date;
  avatar?: string;
  phone_number?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  avatar_id?: number;
  phone_verified_at?: Date;
  gender?: string;
  user_name?: string;
  is_banned?: boolean;
  is_testing?: boolean;
  status?: string;
  is_email_verified?: boolean;
  is_phone_verified?: boolean;
  bio?: string;
}

export type UsersCreationAttributes = Optional<UsersAttributes, 'id' | 'password' | 'email_verified_at' | 'avatar' | 'phone_number' | 'deleted_at' | 'avatar_id' | 'phone_verified_at' | 'gender' | 'user_name' | 'is_banned' | 'is_testing' | 'status' | 'is_email_verified' | 'is_phone_verified' | 'bio'>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  declare id?: string;
  declare email: string;
  declare password?: string;
  declare full_name: string;
  declare email_verified_at?: Date;
  declare avatar?: string;
  declare phone_number?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare avatar_id?: number;
  declare phone_verified_at?: Date;
  declare gender?: string;
  declare user_name?: string;
  declare is_banned?: boolean;
  declare is_testing?: boolean;
  declare status?: string;
  declare is_email_verified?: boolean;
  declare is_phone_verified?: boolean;
  declare bio?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Users {
    Users.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: true },
        full_name: { type: DataTypes.STRING, allowNull: false },
        email_verified_at: { type: DataTypes.DATE, allowNull: true },
        avatar: { type: DataTypes.STRING, allowNull: true },
        phone_number: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        avatar_id: { type: DataTypes.INTEGER, allowNull: true },
        phone_verified_at: { type: DataTypes.DATE, allowNull: true },
        gender: { type: DataTypes.STRING, allowNull: true },
        user_name: { type: DataTypes.STRING, allowNull: true },
        is_banned: { type: DataTypes.BOOLEAN, allowNull: true },
        is_testing: { type: DataTypes.BOOLEAN, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: true },
        is_email_verified: { type: DataTypes.BOOLEAN },
        is_phone_verified: { type: DataTypes.BOOLEAN },
        bio: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: true,
        underscored: false,
      }
    );
    return Users;
  }
}
