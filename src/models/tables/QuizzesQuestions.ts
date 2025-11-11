import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesQuestionsAttributes {
  id?: string;
  quiz_id: string;
  question: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type QuizzesQuestionsCreationAttributes = Optional<QuizzesQuestionsAttributes, 'id' | 'deleted_at'>;

export class QuizzesQuestions extends Model<QuizzesQuestionsAttributes, QuizzesQuestionsCreationAttributes> implements QuizzesQuestionsAttributes {
  declare id?: string;
  declare quiz_id: string;
  declare question: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof QuizzesQuestions {
    QuizzesQuestions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        quiz_id: { type: DataTypes.UUID, allowNull: false },
        question: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'quizzes_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return QuizzesQuestions;
  }
}
