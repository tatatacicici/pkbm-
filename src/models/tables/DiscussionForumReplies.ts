import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumRepliesAttributes {
  id?: string;
  user_id: string;
  comment_id: string;
  content?: string;
  image?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  df_id?: string;
  image_id?: number;
}

export type DiscussionForumRepliesCreationAttributes = Optional<DiscussionForumRepliesAttributes, 'id' | 'content' | 'image' | 'deleted_at' | 'df_id' | 'image_id'>;

export class DiscussionForumReplies extends Model<DiscussionForumRepliesAttributes, DiscussionForumRepliesCreationAttributes> implements DiscussionForumRepliesAttributes {
  declare id?: string;
  declare user_id: string;
  declare comment_id: string;
  declare content?: string;
  declare image?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare df_id?: string;
  declare image_id?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionForumReplies {
    DiscussionForumReplies.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        comment_id: { type: DataTypes.UUID, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: true },
        image: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        df_id: { type: DataTypes.UUID, allowNull: true },
        image_id: { type: DataTypes.INTEGER, allowNull: true }
      },
      {
        sequelize,
        tableName: 'discussion_forum_replies',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionForumReplies;
  }
}
