import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProgressQuestionAnswersAttributes {
  id: string;
  questionId: string;
  answerId?: string;
  progressId: string;
}

export type ProgressQuestionAnswersPk = "id";
export type ProgressQuestionAnswersId = ProgressQuestionAnswers[ProgressQuestionAnswersPk];
export type ProgressQuestionAnswersOptionalAttributes = "answerId";
export type ProgressQuestionAnswersCreationAttributes = Optional<ProgressQuestionAnswersAttributes, ProgressQuestionAnswersOptionalAttributes>;

export class ProgressQuestionAnswers extends Model<ProgressQuestionAnswersAttributes, ProgressQuestionAnswersCreationAttributes> implements ProgressQuestionAnswersAttributes {
  id!: string;
  questionId!: string;
  answerId?: string;
  progressId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProgressQuestionAnswers {
    return ProgressQuestionAnswers.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    questionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'question_id'
    },
    answerId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'answer_id'
    },
    progressId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'progress_id'
    }
  }, {
    sequelize,
    tableName: 'progress_question_answers',
    schema: 'public',
    timestamps: false
  });
  }
}
