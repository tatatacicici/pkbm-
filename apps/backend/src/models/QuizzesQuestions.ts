import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface QuizzesQuestionsAttributes {
  id: string;
  quizId: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type QuizzesQuestionsPk = "id";
export type QuizzesQuestionsId = QuizzesQuestions[QuizzesQuestionsPk];
export type QuizzesQuestionsOptionalAttributes = "deletedAt";
export type QuizzesQuestionsCreationAttributes = Optional<QuizzesQuestionsAttributes, QuizzesQuestionsOptionalAttributes>;

export class QuizzesQuestions extends Model<QuizzesQuestionsAttributes, QuizzesQuestionsCreationAttributes> implements QuizzesQuestionsAttributes {
  id!: string;
  quizId!: string;
  question!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof QuizzesQuestions {
    return QuizzesQuestions.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    quizId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'quiz_id'
    },
    question: {
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
    tableName: 'quizzes_questions',
    schema: 'public',
    timestamps: false
  });
  }
}
