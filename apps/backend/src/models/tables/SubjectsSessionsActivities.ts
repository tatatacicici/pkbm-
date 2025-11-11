import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsActivitiesAttributes {
  id?: string;
  session_id: string;
  type: string;
  reference_id?: string;
  duration?: number;
  start_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  subject_id: string;
  duration_type?: string;
}

export type SubjectsSessionsActivitiesCreationAttributes = Optional<SubjectsSessionsActivitiesAttributes, 'id' | 'reference_id' | 'duration' | 'start_at' | 'deleted_at' | 'duration_type'>;

export class SubjectsSessionsActivities extends Model<SubjectsSessionsActivitiesAttributes, SubjectsSessionsActivitiesCreationAttributes> implements SubjectsSessionsActivitiesAttributes {
  declare id?: string;
  declare session_id: string;
  declare type: string;
  declare reference_id?: string;
  declare duration?: number;
  declare start_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare subject_id: string;
  declare duration_type?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectsSessionsActivities {
    SubjectsSessionsActivities.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        reference_id: { type: DataTypes.UUID, allowNull: true },
        duration: { type: DataTypes.INTEGER, allowNull: true },
        start_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        duration_type: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'subjects_sessions_activities',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectsSessionsActivities;
  }
}
