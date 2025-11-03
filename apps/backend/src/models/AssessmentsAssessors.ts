import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsAssessorsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessorId: string;
  role: string;
  assignedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsAssessorsPk = "pk";
export type AssessmentsAssessorsId = AssessmentsAssessors[AssessmentsAssessorsPk];
export type AssessmentsAssessorsOptionalAttributes = "pk" | "id" | "deletedAt";
export type AssessmentsAssessorsCreationAttributes = Optional<AssessmentsAssessorsAttributes, AssessmentsAssessorsOptionalAttributes>;

export class AssessmentsAssessors extends Model<AssessmentsAssessorsAttributes, AssessmentsAssessorsCreationAttributes> implements AssessmentsAssessorsAttributes {
  pk!: number;
  id?: string;
  assessmentId!: number;
  assessorId!: string;
  role!: string;
  assignedAt!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentsAssessors {
    return AssessmentsAssessors.init({
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
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    assignedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'assigned_at'
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
    tableName: 'assessments_assessors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_assessors_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
