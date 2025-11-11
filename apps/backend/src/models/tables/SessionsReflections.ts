import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsAttributes {
  pk: number;
  id?: string;
  subject_id: string;
  session_id: string;
  student_id: string;
  message: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SessionsReflectionsCreationAttributes = Optional<SessionsReflectionsAttributes, 'id' | 'deleted_at'>;

export class SessionsReflections extends Model<SessionsReflectionsAttributes, SessionsReflectionsCreationAttributes> implements SessionsReflectionsAttributes {
  declare pk: number;
  declare id?: string;
  declare subject_id: string;
  declare session_id: string;
  declare student_id: string;
  declare message: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflections {
    SessionsReflections.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_reflections',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflections;
  }
}
