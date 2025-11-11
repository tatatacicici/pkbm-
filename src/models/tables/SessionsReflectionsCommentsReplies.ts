import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsRepliesAttributes {
  id?: any;
  reflection_id?: any;
  comment_id?: any;
  user_id?: any;
  content?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SessionsReflectionsCommentsRepliesCreationAttributes = Optional<SessionsReflectionsCommentsRepliesAttributes, 'id'>;

export class SessionsReflectionsCommentsReplies extends Model<SessionsReflectionsCommentsRepliesAttributes, SessionsReflectionsCommentsRepliesCreationAttributes> implements SessionsReflectionsCommentsRepliesAttributes {
  declare id?: any;
  declare reflection_id?: any;
  declare comment_id?: any;
  declare user_id?: any;
  declare content?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
