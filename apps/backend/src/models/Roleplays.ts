import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RoleplaysAttributes {
  pk: number;
  id?: string;
  topic: string;
  description?: string;
  caseStudy?: string;
  rules?: string;
  duration: number;
  subjectId: string;
  sessionId: string;
  rubricId: number;
  startAt: Date;
  endAt: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplaysPk = "id";
export type RoleplaysId = Roleplays[RoleplaysPk];
export type RoleplaysOptionalAttributes = "pk" | "id" | "description" | "caseStudy" | "rules" | "deletedAt";
export type RoleplaysCreationAttributes = Optional<RoleplaysAttributes, RoleplaysOptionalAttributes>;

export class Roleplays extends Model<RoleplaysAttributes, RoleplaysCreationAttributes> implements RoleplaysAttributes {
  pk!: number;
  id?: string;
  topic!: string;
  description?: string;
  caseStudy?: string;
  rules?: string;
  duration!: number;
  subjectId!: string;
  sessionId!: string;
  rubricId!: number;
  startAt!: Date;
  endAt!: Date;
  createdBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Roleplays {
    return Roleplays.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    caseStudy: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'case_study'
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    },
    rubricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rubric_id'
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_at'
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_at'
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'created_by'
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
    tableName: 'roleplays',
    schema: 'public',
    timestamps: false
  });
  }
}
