import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesQuestionsAttributes {
  id?: any;
  quiz_id?: any;
  question?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type QuizzesQuestionsCreationAttributes = Optional<QuizzesQuestionsAttributes, 'id'>;

export class QuizzesQuestions extends Model<QuizzesQuestionsAttributes, QuizzesQuestionsCreationAttributes> implements QuizzesQuestionsAttributes {
  declare id?: any;
  declare quiz_id?: any;
  declare question?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
