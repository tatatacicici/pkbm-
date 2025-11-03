import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SurveysQuestionsAttributes {
  pk: number;
  uuid?: string;
  surveyId: number;
  question: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  position: number;
}

export type SurveysQuestionsOptionalAttributes = "pk" | "uuid" | "deletedAt" | "position";
export type SurveysQuestionsCreationAttributes = Optional<SurveysQuestionsAttributes, SurveysQuestionsOptionalAttributes>;

export class SurveysQuestions extends Model<SurveysQuestionsAttributes, SurveysQuestionsCreationAttributes> implements SurveysQuestionsAttributes {
  pk!: number;
  uuid?: string;
  surveyId!: number;
  question!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  position!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof SurveysQuestions {
    return SurveysQuestions.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    surveyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'survey_id'
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'surveys_questions',
    schema: 'public',
    timestamps: false
  });
  }
}
