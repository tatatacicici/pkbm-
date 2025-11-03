import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectsSessionsAssessmentsAttributes {
  id: string;
  title: string;
  description: string;
  type: "SELF_ASSESSMENT" | "TEACHER_ASSESSMENT";
  status: "DRAFT" | "PUBLISHED";
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  subjectId: string;
  sessionId: string;
}

export type SubjectsSessionsAssessmentsPk = "id";
export type SubjectsSessionsAssessmentsId = SubjectsSessionsAssessments[SubjectsSessionsAssessmentsPk];
export type SubjectsSessionsAssessmentsOptionalAttributes = "status" | "deletedAt";
export type SubjectsSessionsAssessmentsCreationAttributes = Optional<SubjectsSessionsAssessmentsAttributes, SubjectsSessionsAssessmentsOptionalAttributes>;

export class SubjectsSessionsAssessments extends Model<SubjectsSessionsAssessmentsAttributes, SubjectsSessionsAssessmentsCreationAttributes> implements SubjectsSessionsAssessmentsAttributes {
  id!: string;
  title!: string;
  description!: string;
  type!: "SELF_ASSESSMENT" | "TEACHER_ASSESSMENT";
  status!: "DRAFT" | "PUBLISHED";
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  subjectId!: string;
  sessionId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubjectsSessionsAssessments {
    return SubjectsSessionsAssessments.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("SELF_ASSESSMENT","TEACHER_ASSESSMENT"),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("DRAFT","PUBLISHED"),
      allowNull: false,
      defaultValue: "DRAFT"
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
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    }
  }, {
    sequelize,
    tableName: 'subjects_sessions_assessments',
    schema: 'public',
    timestamps: false
  });
  }
}
