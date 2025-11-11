import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumRepliesAttributes {
  id?: any;
  user_id?: any;
  comment_id?: any;
  content?: any;
  image?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  df_id?: any;
  image_id?: any;
}

export type DiscussionForumRepliesCreationAttributes = Optional<DiscussionForumRepliesAttributes, 'id'>;

export class DiscussionForumReplies extends Model<DiscussionForumRepliesAttributes, DiscussionForumRepliesCreationAttributes> implements DiscussionForumRepliesAttributes {
  declare id?: any;
  declare user_id?: any;
  declare comment_id?: any;
  declare content?: any;
  declare image?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare df_id?: any;
  declare image_id?: any;

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
