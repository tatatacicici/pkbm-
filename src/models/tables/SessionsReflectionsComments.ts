import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsAttributes {
  id?: string;
  reflection_id: number;
  user_id: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SessionsReflectionsCommentsCreationAttributes = Optional<SessionsReflectionsCommentsAttributes, 'id' | 'deleted_at'>;

export class SessionsReflectionsComments extends Model<SessionsReflectionsCommentsAttributes, SessionsReflectionsCommentsCreationAttributes> implements SessionsReflectionsCommentsAttributes {
  declare id?: string;
  declare reflection_id: number;
  declare user_id: string;
  declare content: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflectionsComments {
    SessionsReflectionsComments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        reflection_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_reflections_comments',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflectionsComments;
  }
}
