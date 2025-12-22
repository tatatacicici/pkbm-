import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DiscussionForumCommentsAttributes {
  id: string;
  userId: string;
  dfId: string;
  content: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  imageId?: number;
}

export type DiscussionForumCommentsPk = "id";
export type DiscussionForumCommentsId = DiscussionForumComments[DiscussionForumCommentsPk];
export type DiscussionForumCommentsOptionalAttributes = "image" | "deletedAt" | "imageId";
export type DiscussionForumCommentsCreationAttributes = Optional<DiscussionForumCommentsAttributes, DiscussionForumCommentsOptionalAttributes>;

export class DiscussionForumComments extends Model<DiscussionForumCommentsAttributes, DiscussionForumCommentsCreationAttributes> implements DiscussionForumCommentsAttributes {
  id!: string;
  userId!: string;
  dfId!: string;
  content!: string;
  image?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  imageId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DiscussionForumComments {
    return DiscussionForumComments.init({
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
    dfId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'df_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
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
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'image_id'
    }
  }, {
    sequelize,
    tableName: 'discussion_forum_comments',
    schema: 'public',
    timestamps: false
  });
  }
}
