import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSocialMediaAttributes {
  id?: string;
  user_id: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type UsersSocialMediaCreationAttributes = Optional<UsersSocialMediaAttributes, 'id' | 'tiktok' | 'instagram' | 'youtube' | 'deleted_at'>;

export class UsersSocialMedia extends Model<UsersSocialMediaAttributes, UsersSocialMediaCreationAttributes> implements UsersSocialMediaAttributes {
  declare id?: string;
  declare user_id: string;
  declare tiktok?: string;
  declare instagram?: string;
  declare youtube?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersSocialMedia {
    UsersSocialMedia.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        tiktok: { type: DataTypes.STRING, allowNull: true },
        instagram: { type: DataTypes.STRING, allowNull: true },
        youtube: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'users_social_media',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersSocialMedia;
  }
}
