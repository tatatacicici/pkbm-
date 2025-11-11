import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsRepliesAttributes {
  id?: string;
  reflection_id: number;
  comment_id: string;
  user_id: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SessionsReflectionsCommentsRepliesCreationAttributes = Optional<SessionsReflectionsCommentsRepliesAttributes, 'id' | 'deleted_at'>;

export class SessionsReflectionsCommentsReplies extends Model<SessionsReflectionsCommentsRepliesAttributes, SessionsReflectionsCommentsRepliesCreationAttributes> implements SessionsReflectionsCommentsRepliesAttributes {
  declare id?: string;
  declare reflection_id: number;
  declare comment_id: string;
  declare user_id: string;
  declare content: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflectionsCommentsReplies {
    SessionsReflectionsCommentsReplies.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        reflection_id: { type: DataTypes.INTEGER, allowNull: false },
        comment_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_reflections_comments_replies',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflectionsCommentsReplies;
  }
}
