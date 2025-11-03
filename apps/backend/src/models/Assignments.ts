import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssignmentsAttributes {
  id: string;
  sessionId: string;
  title: string;
  desc: string;
  durationDays: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  moduleId?: string;
  exercise?: string;
  answerKeyStatus?: "available" | "not_available" | "not_necessary";
  order?: number;
  status?: "draft" | "published" | "DRAFT" | "PUBLISHED";
}

export type AssignmentsPk = "id";
export type AssignmentsId = Assignments[AssignmentsPk];
export type AssignmentsOptionalAttributes = "deletedAt" | "moduleId" | "exercise" | "answerKeyStatus" | "order" | "status";
export type AssignmentsCreationAttributes = Optional<AssignmentsAttributes, AssignmentsOptionalAttributes>;

export class Assignments extends Model<AssignmentsAttributes, AssignmentsCreationAttributes> implements AssignmentsAttributes {
  id!: string;
  sessionId!: string;
  title!: string;
  desc!: string;
  durationDays!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  moduleId?: string;
  exercise?: string;
  answerKeyStatus?: "available" | "not_available" | "not_necessary";
  order?: number;
  status?: "draft" | "published" | "DRAFT" | "PUBLISHED";


  static initModel(sequelize: Sequelize.Sequelize): typeof Assignments {
    return Assignments.init({
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    durationDays: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'duration_days'
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
    moduleId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'module_id'
    },
    exercise: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answerKeyStatus: {
      type: DataTypes.ENUM("available","not_available","not_necessary"),
      allowNull: true,
      defaultValue: "not_available",
      field: 'answer_key_status'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("draft","published","DRAFT","PUBLISHED"),
      allowNull: true,
      defaultValue: "DRAFT"
    }
  }, {
    sequelize,
    tableName: 'assignments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assignments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
