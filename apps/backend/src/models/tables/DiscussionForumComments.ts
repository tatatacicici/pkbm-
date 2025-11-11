import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumCommentsAttributes {
  id?: string;
  user_id: string;
  df_id: string;
  content: string;
  image?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  image_id?: number;
}

export type DiscussionForumCommentsCreationAttributes = Optional<DiscussionForumCommentsAttributes, 'id' | 'image' | 'deleted_at' | 'image_id'>;

export class DiscussionForumComments extends Model<DiscussionForumCommentsAttributes, DiscussionForumCommentsCreationAttributes> implements DiscussionForumCommentsAttributes {
  declare id?: string;
  declare user_id: string;
  declare df_id: string;
  declare content: string;
  declare image?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare image_id?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionForumComments {
    DiscussionForumComments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        df_id: { type: DataTypes.UUID, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        image_id: { type: DataTypes.INTEGER, allowNull: true }
      },
      {
        sequelize,
        tableName: 'discussion_forum_comments',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionForumComments;
  }
}
