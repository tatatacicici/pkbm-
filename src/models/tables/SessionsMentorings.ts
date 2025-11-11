import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsMentoringsAttributes {
  pk?: any;
  id?: any;
  subject_id?: any;
  session_id?: any;
  teacher_id?: any;
  session?: any;
  title?: any;
  content?: any;
  duration?: any;
  location?: any;
  date?: any;
  link?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  module_id?: any;
  type?: any;
}

export type SessionsMentoringsCreationAttributes = Optional<SessionsMentoringsAttributes, 'id'>;

export class SessionsMentorings extends Model<SessionsMentoringsAttributes, SessionsMentoringsCreationAttributes> implements SessionsMentoringsAttributes {
  declare pk?: any;
  declare id?: any;
  declare subject_id?: any;
  declare session_id?: any;
  declare teacher_id?: any;
  declare session?: any;
  declare title?: any;
  declare content?: any;
  declare duration?: any;
  declare location?: any;
  declare date?: any;
  declare link?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare module_id?: any;
  declare type?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsMentorings {
    SessionsMentorings.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        teacher_id: { type: DataTypes.UUID, allowNull: false },
        session: { type: DataTypes.INTEGER, allowNull: true },
        title: { type: DataTypes.TEXT, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        duration: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        link: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        module_id: { type: DataTypes.UUID, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_mentorings',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsMentorings;
  }
}
