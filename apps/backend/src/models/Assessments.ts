import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentsAttributes {
  pk: number;
  id?: string;
  topic: string;
  description: string;
  thumbnail: string;
  thumbnailId: number;
  caseStudy: string;
  rules: string;
  duration: number;
  majorId: string;
  subjectId: string;
  rubricId: number;
  startAt: Date;
  endAt: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsPk = "pk";
export type AssessmentsId = Assessments[AssessmentsPk];
export type AssessmentsOptionalAttributes = "pk" | "id" | "deletedAt";
export type AssessmentsCreationAttributes = Optional<AssessmentsAttributes, AssessmentsOptionalAttributes>;

export class Assessments extends Model<AssessmentsAttributes, AssessmentsCreationAttributes> implements AssessmentsAttributes {
  pk!: number;
  id?: string;
  topic!: string;
  description!: string;
  thumbnail!: string;
  thumbnailId!: number;
  caseStudy!: string;
  rules!: string;
  duration!: number;
  majorId!: string;
  subjectId!: string;
  rubricId!: number;
  startAt!: Date;
  endAt!: Date;
  createdBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Assessments {
    return Assessments.init({
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
    topic: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    thumbnailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'thumbnail_id'
    },
    caseStudy: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'case_study'
    },
    rules: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    majorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'major_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
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
    tableName: 'assessments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessments_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
