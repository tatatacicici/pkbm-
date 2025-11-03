import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsSessionsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  type: string;
  status: string;
  day: string;
  time: string;
  bookedBy: string;
  bookedAt: Date;
  rubricScore?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsPk = "pk";
export type AssessmentsSessionsId = AssessmentsSessions[AssessmentsSessionsPk];
export type AssessmentsSessionsOptionalAttributes = "pk" | "id" | "rubricScore" | "deletedAt";
export type AssessmentsSessionsCreationAttributes = Optional<AssessmentsSessionsAttributes, AssessmentsSessionsOptionalAttributes>;

export class AssessmentsSessions extends Model<AssessmentsSessionsAttributes, AssessmentsSessionsCreationAttributes> implements AssessmentsSessionsAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  type!: string;
  status!: string;
  day!: string;
  time!: string;
  bookedBy!: string;
  bookedAt!: Date;
  rubricScore?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsSessions {
    return AssessmentsSessions.init({
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
    assessmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assessment_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    day: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    time: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bookedBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'booked_by'
    },
    bookedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'booked_at'
    },
    rubricScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'rubric_score'
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
    tableName: 'assessments_sessions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_sessions_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
