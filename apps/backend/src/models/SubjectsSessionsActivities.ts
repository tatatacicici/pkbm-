import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectsSessionsActivitiesAttributes {
  id: string;
  sessionId: string;
  type: string;
  referenceId?: string;
  order: number;
  duration?: number;
  startAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  subjectId: string;
  durationType?: string;
}

export type SubjectsSessionsActivitiesPk = "id";
export type SubjectsSessionsActivitiesId = SubjectsSessionsActivities[SubjectsSessionsActivitiesPk];
export type SubjectsSessionsActivitiesOptionalAttributes = "referenceId" | "duration" | "startAt" | "deletedAt" | "durationType";
export type SubjectsSessionsActivitiesCreationAttributes = Optional<SubjectsSessionsActivitiesAttributes, SubjectsSessionsActivitiesOptionalAttributes>;

export class SubjectsSessionsActivities extends Model<SubjectsSessionsActivitiesAttributes, SubjectsSessionsActivitiesCreationAttributes> implements SubjectsSessionsActivitiesAttributes {
  id!: string;
  sessionId!: string;
  type!: string;
  referenceId?: string;
  order!: number;
  duration?: number;
  startAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  subjectId!: string;
  durationType?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubjectsSessionsActivities {
    return SubjectsSessionsActivities.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    referenceId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'reference_id'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    durationType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL",
      field: 'duration_type'
    }
  }, {
    sequelize,
    tableName: 'subjects_sessions_activities',
    schema: 'public',
    timestamps: false
  });
  }
}
