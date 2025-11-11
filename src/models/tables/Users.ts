import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersAttributes {
  id?: any;
  email?: any;
  password?: any;
  full_name?: any;
  email_verified_at?: any;
  avatar?: any;
  phone_number?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  avatar_id?: any;
  phone_verified_at?: any;
  gender?: any;
  user_name?: any;
  is_banned?: any;
  is_testing?: any;
  status?: any;
  is_email_verified?: any;
  is_phone_verified?: any;
  bio?: any;
}

export type UsersCreationAttributes = Optional<UsersAttributes, 'id'>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  declare id?: any;
  declare email?: any;
  declare password?: any;
  declare full_name?: any;
  declare email_verified_at?: any;
  declare avatar?: any;
  declare phone_number?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare avatar_id?: any;
  declare phone_verified_at?: any;
  declare gender?: any;
  declare user_name?: any;
  declare is_banned?: any;
  declare is_testing?: any;
  declare status?: any;
  declare is_email_verified?: any;
  declare is_phone_verified?: any;
  declare bio?: any;

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
