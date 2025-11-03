import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsAttributes {
  id: string;
  reflectionId: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsCommentsPk = "id";
export type SessionsReflectionsCommentsId = SessionsReflectionsComments[SessionsReflectionsCommentsPk];
export type SessionsReflectionsCommentsOptionalAttributes = "deletedAt";
export type SessionsReflectionsCommentsCreationAttributes = Optional<SessionsReflectionsCommentsAttributes, SessionsReflectionsCommentsOptionalAttributes>;

export class SessionsReflectionsComments extends Model<SessionsReflectionsCommentsAttributes, SessionsReflectionsCommentsCreationAttributes> implements SessionsReflectionsCommentsAttributes {
  id!: string;
  reflectionId!: number;
  userId!: string;
  content!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsReflectionsComments {
    return SessionsReflectionsComments.init({
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
    tableName: 'sessions_reflections_comments',
    schema: 'public',
    timestamps: false
  });
  }
}
