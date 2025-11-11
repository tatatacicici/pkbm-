import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsAttributes {
  pk?: any;
  id?: any;
  subject_id?: any;
  session_id?: any;
  student_id?: any;
  message?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SessionsReflectionsCreationAttributes = Optional<SessionsReflectionsAttributes, 'id'>;

export class SessionsReflections extends Model<SessionsReflectionsAttributes, SessionsReflectionsCreationAttributes> implements SessionsReflectionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare subject_id?: any;
  declare session_id?: any;
  declare student_id?: any;
  declare message?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
