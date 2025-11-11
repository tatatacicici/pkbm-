import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesAnswersAttributes {
  id?: any;
  question_id?: any;
  answer?: any;
  is_correct?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  score?: any;
}

export type QuizzesAnswersCreationAttributes = Optional<QuizzesAnswersAttributes, 'id'>;

export class QuizzesAnswers extends Model<QuizzesAnswersAttributes, QuizzesAnswersCreationAttributes> implements QuizzesAnswersAttributes {
  declare id?: any;
  declare question_id?: any;
  declare answer?: any;
  declare is_correct?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare score?: any;

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
