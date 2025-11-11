import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsActivitiesAttributes {
  id?: any;
  session_id?: any;
  type?: any;
  reference_id?: any;
  duration?: any;
  start_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  subject_id?: any;
  duration_type?: any;
}

export type SubjectsSessionsActivitiesCreationAttributes = Optional<SubjectsSessionsActivitiesAttributes, 'id'>;

export class SubjectsSessionsActivities extends Model<SubjectsSessionsActivitiesAttributes, SubjectsSessionsActivitiesCreationAttributes> implements SubjectsSessionsActivitiesAttributes {
  declare id?: any;
  declare session_id?: any;
  declare type?: any;
  declare reference_id?: any;
  declare duration?: any;
  declare start_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare subject_id?: any;
  declare duration_type?: any;

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
