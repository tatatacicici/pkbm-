import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DrillsAttributes {
  id: number;
  uuid?: string;
  topic: string;
  description: string;
  session: string;
  roleplay: string;
  assessorId: string;
  studentId: string;
  accepted: boolean;
  score?: number;
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DrillsPk = "id";
export type DrillsId = Drills[DrillsPk];
export type DrillsOptionalAttributes = "id" | "uuid" | "score" | "feedback" | "deletedAt";
export type DrillsCreationAttributes = Optional<DrillsAttributes, DrillsOptionalAttributes>;

export class Drills extends Model<DrillsAttributes, DrillsCreationAttributes> implements DrillsAttributes {
  id!: number;
  uuid?: string;
  topic!: string;
  description!: string;
  session!: string;
  roleplay!: string;
  assessorId!: string;
  studentId!: string;
  accepted!: boolean;
  score?: number;
  feedback?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Drills {
    return Drills.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    session: {
      type: DataTypes.UUID,
      allowNull: false
    },
    roleplay: {
      type: DataTypes.UUID,
      allowNull: false
    },
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'drills',
    schema: 'public',
    timestamps: false
  });
  }
}
