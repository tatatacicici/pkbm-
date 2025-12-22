import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgressQuestionAnswersAttributes {
  id?: string;
  questionId: string;
  answerId?: string;
  progressId: string;
}

export type ProgressQuestionAnswersCreationAttributes = Optional<ProgressQuestionAnswersAttributes, 'id' | 'answerId'>;

export class ProgressQuestionAnswers extends Model<ProgressQuestionAnswersAttributes, ProgressQuestionAnswersCreationAttributes> implements ProgressQuestionAnswersAttributes {
  declare id?: string;
  declare questionId: string;
  declare answerId?: string;
  declare progressId: string;

  public static initModel(sequelize: Sequelize): typeof ProgressQuestionAnswers {
    ProgressQuestionAnswers.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        questionId: { type: DataTypes.UUID, allowNull: false,
            field: 'question_id'
        },
        answerId: { type: DataTypes.UUID, allowNull: true,
            field: 'answer_id'
        },
        progressId: { type: DataTypes.UUID, allowNull: false,
            field: 'progress_id'
        }
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
