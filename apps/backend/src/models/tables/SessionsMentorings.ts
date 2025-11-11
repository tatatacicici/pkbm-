import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsMentoringsAttributes {
  pk: number;
  id?: string;
  subject_id: string;
  session_id: string;
  teacher_id: string;
  session?: number;
  title: string;
  content: string;
  duration: string;
  location: string;
  date: Date;
  link: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  module_id?: string;
  type?: string;
}

export type SessionsMentoringsCreationAttributes = Optional<SessionsMentoringsAttributes, 'id' | 'session' | 'deleted_at' | 'module_id' | 'type'>;

export class SessionsMentorings extends Model<SessionsMentoringsAttributes, SessionsMentoringsCreationAttributes> implements SessionsMentoringsAttributes {
  declare pk: number;
  declare id?: string;
  declare subject_id: string;
  declare session_id: string;
  declare teacher_id: string;
  declare session?: number;
  declare title: string;
  declare content: string;
  declare duration: string;
  declare location: string;
  declare date: Date;
  declare link: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare module_id?: string;
  declare type?: string;

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
