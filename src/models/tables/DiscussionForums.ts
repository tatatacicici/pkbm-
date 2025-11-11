import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumsAttributes {
  id?: any;
  user_id?: any;
  session_id?: any;
  title?: any;
  content?: any;
  is_global?: any;
  images?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type DiscussionForumsCreationAttributes = Optional<DiscussionForumsAttributes, 'id'>;

export class DiscussionForums extends Model<DiscussionForumsAttributes, DiscussionForumsCreationAttributes> implements DiscussionForumsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare session_id?: any;
  declare title?: any;
  declare content?: any;
  declare is_global?: any;
  declare images?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
