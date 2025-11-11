import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumsAttributes {
  id?: string;
  user_id: string;
  session_id: string;
  title?: string;
  content: string;
  is_global?: boolean;
  images?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DiscussionForumsCreationAttributes = Optional<DiscussionForumsAttributes, 'id' | 'title' | 'is_global' | 'images' | 'deleted_at'>;

export class DiscussionForums extends Model<DiscussionForumsAttributes, DiscussionForumsCreationAttributes> implements DiscussionForumsAttributes {
  declare id?: string;
  declare user_id: string;
  declare session_id: string;
  declare title?: string;
  declare content: string;
  declare is_global?: boolean;
  declare images?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionForums {
    DiscussionForums.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: false },
        is_global: { type: DataTypes.BOOLEAN },
        images: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'discussion_forums',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionForums;
  }
}
