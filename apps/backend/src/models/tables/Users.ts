import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersAttributes {
  id?: string;
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
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;

  bio?: string;
}

export type UsersCreationAttributes = Optional<
  UsersAttributes,
  | 'id'
  | 'password'
  | 'emailVerifiedAt'
  | 'avatar'
  | 'phoneNumber'
  | 'deletedAt'
  | 'avatarId'
  | 'phoneVerifiedAt'
  | 'gender'
  | 'userName'
  | 'isBanned'
  | 'isTesting'
  | 'status'
  | 'isEmailVerified'
  | 'isPhoneVerified'
  | 'bio'
>;

export class Users
  extends Model<UsersAttributes, UsersCreationAttributes>
  implements UsersAttributes
{
  declare id?: string;
  declare email: string;
  declare password?: string;

  declare fullName: string;
  declare emailVerifiedAt?: Date;
  declare avatar?: string;
  declare phoneNumber?: string;

  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  declare avatarId?: number;
  declare phoneVerifiedAt?: Date;
  declare gender?: string;
  declare userName?: string;

  declare isBanned?: boolean;
  declare isTesting?: boolean;
  declare status?: string;
  declare isEmailVerified?: boolean;
  declare isPhoneVerified?: boolean;

  declare bio?: string;

  public static initModel(sequelize: Sequelize): typeof Users {
    Users.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },

        email: { type: DataTypes.STRING, allowNull: false,
            field: 'email'
        },
        password: { type: DataTypes.STRING, allowNull: true,
            field: 'password'
        },

        fullName: { field: 'full_name', type: DataTypes.STRING, allowNull: false },
        emailVerifiedAt: { field: 'email_verified_at', type: DataTypes.DATE },
        avatar: { type: DataTypes.STRING,
            field: 'avatar'
        },
        phoneNumber: { field: 'phone_number', type: DataTypes.STRING },

        createdAt: { field: 'created_at', type: DataTypes.DATE, allowNull: false },
        updatedAt: { field: 'updated_at', type: DataTypes.DATE, allowNull: false },
        deletedAt: { field: 'deleted_at', type: DataTypes.DATE },

        avatarId: { field: 'avatar_id', type: DataTypes.INTEGER },
        phoneVerifiedAt: { field: 'phone_verified_at', type: DataTypes.DATE },
        gender: { type: DataTypes.STRING,
            field: 'gender'
        },
        userName: { field: 'user_name', type: DataTypes.STRING },

        isBanned: { field: 'is_banned', type: DataTypes.BOOLEAN },
        isTesting: { field: 'is_testing', type: DataTypes.BOOLEAN },
        status: { type: DataTypes.STRING,
            field: 'status'
        },

        isEmailVerified: { field: 'is_email_verified', type: DataTypes.BOOLEAN },
        isPhoneVerified: { field: 'is_phone_verified', type: DataTypes.BOOLEAN },

        bio: { type: DataTypes.TEXT,
            field: 'bio'
        },
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: true,
        underscored: false
      }
    );

    return Users;
  }
}
