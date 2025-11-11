import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgressQuestionAnswersAttributes {
  id?: string;
  question_id: string;
  answer_id?: string;
  progress_id: string;
}

export type ProgressQuestionAnswersCreationAttributes = Optional<ProgressQuestionAnswersAttributes, 'id' | 'answer_id'>;

export class ProgressQuestionAnswers extends Model<ProgressQuestionAnswersAttributes, ProgressQuestionAnswersCreationAttributes> implements ProgressQuestionAnswersAttributes {
  declare id?: string;
  declare question_id: string;
  declare answer_id?: string;
  declare progress_id: string;

  public static initModel(sequelize: Sequelize): typeof ProgressQuestionAnswers {
    ProgressQuestionAnswers.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        question_id: { type: DataTypes.UUID, allowNull: false },
        answer_id: { type: DataTypes.UUID, allowNull: true },
        progress_id: { type: DataTypes.UUID, allowNull: false }
      },
      {
        sequelize,
        tableName: 'progress_question_answers',
        timestamps: false,
        underscored: true,
      }
    );
    return ProgressQuestionAnswers;
  }
}
