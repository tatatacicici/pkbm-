import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface QuizzesAnswersAttributes {
  id: string;
  questionId: string;
  answer: string;
  isCorrect: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  score?: number;
}

export type QuizzesAnswersPk = "id";
export type QuizzesAnswersId = QuizzesAnswers[QuizzesAnswersPk];
export type QuizzesAnswersOptionalAttributes = "deletedAt" | "score";
export type QuizzesAnswersCreationAttributes = Optional<QuizzesAnswersAttributes, QuizzesAnswersOptionalAttributes>;

export class QuizzesAnswers extends Model<QuizzesAnswersAttributes, QuizzesAnswersCreationAttributes> implements QuizzesAnswersAttributes {
  id!: string;
  questionId!: string;
  answer!: string;
  isCorrect!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  score?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof QuizzesAnswers {
    return QuizzesAnswers.init({
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
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_correct'
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
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quizzes_answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "answers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
