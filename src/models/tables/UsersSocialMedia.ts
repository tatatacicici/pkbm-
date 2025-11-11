import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSocialMediaAttributes {
  id?: any;
  user_id?: any;
  tiktok?: any;
  instagram?: any;
  youtube?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type UsersSocialMediaCreationAttributes = Optional<UsersSocialMediaAttributes, 'id'>;

export class UsersSocialMedia extends Model<UsersSocialMediaAttributes, UsersSocialMediaCreationAttributes> implements UsersSocialMediaAttributes {
  declare id?: any;
  declare user_id?: any;
  declare tiktok?: any;
  declare instagram?: any;
  declare youtube?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
