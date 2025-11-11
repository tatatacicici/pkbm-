import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DiscussionForumRepliesAttributes {
  id: string;
  userId: string;
  commentId: string;
  content?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  dfId?: string;
  imageId?: number;
}

export type DiscussionForumRepliesPk = "id";
export type DiscussionForumRepliesId = DiscussionForumReplies[DiscussionForumRepliesPk];
export type DiscussionForumRepliesOptionalAttributes = "content" | "image" | "deletedAt" | "dfId" | "imageId";
export type DiscussionForumRepliesCreationAttributes = Optional<DiscussionForumRepliesAttributes, DiscussionForumRepliesOptionalAttributes>;

export class DiscussionForumReplies extends Model<DiscussionForumRepliesAttributes, DiscussionForumRepliesCreationAttributes> implements DiscussionForumRepliesAttributes {
  id!: string;
  userId!: string;
  commentId!: string;
  content?: string;
  image?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  dfId?: string;
  imageId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DiscussionForumReplies {
    return DiscussionForumReplies.init({
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
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'comment_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
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
    },
    dfId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'df_id'
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'image_id'
    }
  }, {
    sequelize,
    tableName: 'discussion_forum_replies',
    schema: 'public',
    timestamps: false
  });
  }
}
