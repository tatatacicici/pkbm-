import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectSessionsAttributes {
  id?: string;
  subject_id: string;
  title: string;
  description?: string;
  session_number: number;
  duration_minutes?: number;
  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type SubjectSessionsCreationAttributes = Optional<SubjectSessionsAttributes, 'id' | 'description' | 'duration_minutes' | 'published_at' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class SubjectSessions extends Model<SubjectSessionsAttributes, SubjectSessionsCreationAttributes> implements SubjectSessionsAttributes {
  declare id?: string;
  declare subject_id: string;
  declare title: string;
  declare description?: string;
  declare session_number: number;
  declare duration_minutes?: number;
  declare published_at?: Date;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectSessions {
    SubjectSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        session_number: { type: DataTypes.INTEGER, allowNull: false },
        duration_minutes: { type: DataTypes.INTEGER, allowNull: true },
        published_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'subject_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectSessions;
  }
}
