import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SurveysResponsesAnswersAttributes {
  pk: number;
  uuid?: string;
  responseId: number;
  questionId: number;
  answer?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  userId: string;
}

export type SurveysResponsesAnswersOptionalAttributes = "pk" | "uuid" | "answer" | "deletedAt";
export type SurveysResponsesAnswersCreationAttributes = Optional<SurveysResponsesAnswersAttributes, SurveysResponsesAnswersOptionalAttributes>;

export class SurveysResponsesAnswers extends Model<SurveysResponsesAnswersAttributes, SurveysResponsesAnswersCreationAttributes> implements SurveysResponsesAnswersAttributes {
  pk!: number;
  uuid?: string;
  responseId!: number;
  questionId!: number;
  answer?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  userId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SurveysResponsesAnswers {
    return SurveysResponsesAnswers.init({
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
    responseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'response_id'
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'question_id'
    },
    answer: {
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
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'surveys_responses_answers',
    schema: 'public',
    timestamps: false
  });
  }
}
