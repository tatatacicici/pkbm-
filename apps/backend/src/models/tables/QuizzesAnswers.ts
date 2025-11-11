import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesAnswersAttributes {
  id?: string;
  question_id: string;
  answer: string;
  is_correct: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  score?: number;
}

export type QuizzesAnswersCreationAttributes = Optional<QuizzesAnswersAttributes, 'id' | 'deleted_at' | 'score'>;

export class QuizzesAnswers extends Model<QuizzesAnswersAttributes, QuizzesAnswersCreationAttributes> implements QuizzesAnswersAttributes {
  declare id?: string;
  declare question_id: string;
  declare answer: string;
  declare is_correct: boolean;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare score?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof QuizzesAnswers {
    QuizzesAnswers.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        question_id: { type: DataTypes.UUID, allowNull: false },
        answer: { type: DataTypes.TEXT, allowNull: false },
        is_correct: { type: DataTypes.BOOLEAN, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        score: { type: DataTypes.DOUBLE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'quizzes_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return QuizzesAnswers;
  }
}
