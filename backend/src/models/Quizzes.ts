import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface QuizzesAttributes {
  id: string;
  sessionId: string;
  type: string;
  title: string;
  durationSec?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  moduleId?: string;
  order?: number;
  maxAttempts: number;
  description?: string;
  status: "DRAFT" | "PUBLISHED";
}

export type QuizzesPk = "id";
export type QuizzesId = Quizzes[QuizzesPk];
export type QuizzesOptionalAttributes = "durationSec" | "deletedAt" | "startDate" | "endDate" | "moduleId" | "order" | "maxAttempts" | "description" | "status";
export type QuizzesCreationAttributes = Optional<QuizzesAttributes, QuizzesOptionalAttributes>;

export class Quizzes extends Model<QuizzesAttributes, QuizzesCreationAttributes> implements QuizzesAttributes {
  id!: string;
  sessionId!: string;
  type!: string;
  title!: string;
  durationSec?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  startDate?: Date;
  endDate?: Date;
  moduleId?: string;
  order?: number;
  maxAttempts!: number;
  description?: string;
  status!: "DRAFT" | "PUBLISHED";


  static initModel(sequelize: Sequelize.Sequelize): typeof Quizzes {
    return Quizzes.init({
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    durationSec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_sec'
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
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_date'
    },
    moduleId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'module_id'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxAttempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
      field: 'max_attempts'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("DRAFT","PUBLISHED"),
      allowNull: false,
      defaultValue: "DRAFT"
    }
  }, {
    sequelize,
    tableName: 'quizzes',
    schema: 'public',
    timestamps: false
  });
  }
}
