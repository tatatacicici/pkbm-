import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsRepliesAttributes {
  id: string;
  reflectionId: number;
  commentId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsCommentsRepliesPk = "id";
export type SessionsReflectionsCommentsRepliesId = SessionsReflectionsCommentsReplies[SessionsReflectionsCommentsRepliesPk];
export type SessionsReflectionsCommentsRepliesOptionalAttributes = "deletedAt";
export type SessionsReflectionsCommentsRepliesCreationAttributes = Optional<SessionsReflectionsCommentsRepliesAttributes, SessionsReflectionsCommentsRepliesOptionalAttributes>;

export class SessionsReflectionsCommentsReplies extends Model<SessionsReflectionsCommentsRepliesAttributes, SessionsReflectionsCommentsRepliesCreationAttributes> implements SessionsReflectionsCommentsRepliesAttributes {
  id!: string;
  reflectionId!: number;
  commentId!: string;
  userId!: string;
  content!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsReflectionsCommentsReplies {
    return SessionsReflectionsCommentsReplies.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    reflectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'reflection_id'
    },
    commentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'comment_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'sessions_reflections_comments_replies',
    schema: 'public',
    timestamps: false
  });
  }
}
