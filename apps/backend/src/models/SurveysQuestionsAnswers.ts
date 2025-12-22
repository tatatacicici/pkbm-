import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SurveysQuestionsAnswersAttributes {
  pk: number;
  uuid?: string;
  questionId: number;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysQuestionsAnswersOptionalAttributes = "pk" | "uuid" | "deletedAt";
export type SurveysQuestionsAnswersCreationAttributes = Optional<SurveysQuestionsAnswersAttributes, SurveysQuestionsAnswersOptionalAttributes>;

export class SurveysQuestionsAnswers extends Model<SurveysQuestionsAnswersAttributes, SurveysQuestionsAnswersCreationAttributes> implements SurveysQuestionsAnswersAttributes {
  pk!: number;
  uuid?: string;
  questionId!: number;
  answer!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SurveysQuestionsAnswers {
    return SurveysQuestionsAnswers.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'question_id'
    },
    answer: {
      type: DataTypes.TEXT,
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
    }
  }, {
    sequelize,
    tableName: 'surveys_questions_answers',
    schema: 'public',
    timestamps: false
  });
  }
}
