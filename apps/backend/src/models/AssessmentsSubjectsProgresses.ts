import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  studentId: string;
  rubricId: number;
  type: string;
  status: string;
  finalScore?: number;
  startedAt: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSubjectsProgressesPk = "pk";
export type AssessmentsSubjectsProgressesId = AssessmentsSubjectsProgresses[AssessmentsSubjectsProgressesPk];
export type AssessmentsSubjectsProgressesOptionalAttributes = "pk" | "id" | "finalScore" | "completedAt" | "deletedAt";
export type AssessmentsSubjectsProgressesCreationAttributes = Optional<AssessmentsSubjectsProgressesAttributes, AssessmentsSubjectsProgressesOptionalAttributes>;

export class AssessmentsSubjectsProgresses extends Model<AssessmentsSubjectsProgressesAttributes, AssessmentsSubjectsProgressesCreationAttributes> implements AssessmentsSubjectsProgressesAttributes {
  pk!: number;
  id?: string;
  subjectId!: string;
  studentId!: string;
  rubricId!: number;
  type!: string;
  status!: string;
  finalScore?: number;
  startedAt!: Date;
  completedAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsSubjectsProgresses {
    return AssessmentsSubjectsProgresses.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    rubricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rubric_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    finalScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'final_score'
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'started_at'
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'completed_at'
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
    }
  }, {
    sequelize,
    tableName: 'assessments_subjects_progresses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_subjects_progresses_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
