import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgressQuestionAnswersAttributes {
  id?: any;
  question_id?: any;
  answer_id?: any;
  progress_id?: any;
}

export type ProgressQuestionAnswersCreationAttributes = Optional<ProgressQuestionAnswersAttributes, 'id'>;

export class ProgressQuestionAnswers extends Model<ProgressQuestionAnswersAttributes, ProgressQuestionAnswersCreationAttributes> implements ProgressQuestionAnswersAttributes {
  declare id?: any;
  declare question_id?: any;
  declare answer_id?: any;
  declare progress_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
