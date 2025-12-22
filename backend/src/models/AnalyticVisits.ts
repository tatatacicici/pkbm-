import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AnalyticVisitsAttributes {
  id: string;
  studentId: string;
  type: "my_study_subjects" | "my_study_subject_sessions" | "my_study_subject_session_journal" | "my_study_subject_session_assignment" | "my_study_subject_session_quiz" | "my_study_subject_session_discussion";
  referenceId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AnalyticVisitsPk = "id";
export type AnalyticVisitsId = AnalyticVisits[AnalyticVisitsPk];
export type AnalyticVisitsOptionalAttributes = "referenceId" | "deletedAt";
export type AnalyticVisitsCreationAttributes = Optional<AnalyticVisitsAttributes, AnalyticVisitsOptionalAttributes>;

export class AnalyticVisits extends Model<AnalyticVisitsAttributes, AnalyticVisitsCreationAttributes> implements AnalyticVisitsAttributes {
  id!: string;
  studentId!: string;
  type!: "my_study_subjects" | "my_study_subject_sessions" | "my_study_subject_session_journal" | "my_study_subject_session_assignment" | "my_study_subject_session_quiz" | "my_study_subject_session_discussion";
  referenceId?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AnalyticVisits {
    return AnalyticVisits.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    type: {
      type: DataTypes.ENUM("my_study_subjects","my_study_subject_sessions","my_study_subject_session_journal","my_study_subject_session_assignment","my_study_subject_session_quiz","my_study_subject_session_discussion"),
      allowNull: false
    },
    referenceId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'reference_id'
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
    tableName: 'analytic_visits',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "analytic_visits_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
