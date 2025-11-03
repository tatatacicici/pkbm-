import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubmissionsAttributes {
  pk: number;
  id: string;
  userId: string;
  assignmentId: number;
  status: string;
  isGraded: boolean;
  score: number;
  documentPath: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SubmissionsPk = "id";
export type SubmissionsId = Submissions[SubmissionsPk];
export type SubmissionsOptionalAttributes = "pk" | "deletedAt";
export type SubmissionsCreationAttributes = Optional<SubmissionsAttributes, SubmissionsOptionalAttributes>;

export class Submissions extends Model<SubmissionsAttributes, SubmissionsCreationAttributes> implements SubmissionsAttributes {
  pk!: number;
  id!: string;
  userId!: string;
  assignmentId!: number;
  status!: string;
  isGraded!: boolean;
  score!: number;
  documentPath!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Submissions {
    return Submissions.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'user_id'
    },
    assignmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assignment_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isGraded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_graded'
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    documentPath: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'document_path'
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
    tableName: 'submissions',
    schema: 'public',
    timestamps: false
  });
  }
}
