import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersSocialMediaAttributes {
  id: string;
  userId: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UsersSocialMediaPk = "id";
export type UsersSocialMediaId = UsersSocialMedia[UsersSocialMediaPk];
export type UsersSocialMediaOptionalAttributes = "tiktok" | "instagram" | "youtube" | "deletedAt";
export type UsersSocialMediaCreationAttributes = Optional<UsersSocialMediaAttributes, UsersSocialMediaOptionalAttributes>;

export class UsersSocialMedia extends Model<UsersSocialMediaAttributes, UsersSocialMediaCreationAttributes> implements UsersSocialMediaAttributes {
  id!: string;
  userId!: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersSocialMedia {
    return UsersSocialMedia.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    tiktok: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    youtube: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'users_social_media',
    schema: 'public',
    timestamps: false
  });
  }
}
