import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumCommentsAttributes {
  id?: any;
  user_id?: any;
  df_id?: any;
  content?: any;
  image?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  image_id?: any;
}

export type DiscussionForumCommentsCreationAttributes = Optional<DiscussionForumCommentsAttributes, 'id'>;

export class DiscussionForumComments extends Model<DiscussionForumCommentsAttributes, DiscussionForumCommentsCreationAttributes> implements DiscussionForumCommentsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare df_id?: any;
  declare content?: any;
  declare image?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare image_id?: any;

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
