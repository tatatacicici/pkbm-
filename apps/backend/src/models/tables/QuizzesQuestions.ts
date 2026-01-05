import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesQuestionsAttributes {
  id?: string;
  quizId: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type QuizzesQuestionsCreationAttributes = Optional<QuizzesQuestionsAttributes, 'id' | 'deletedAt'>;

export class QuizzesQuestions extends Model<QuizzesQuestionsAttributes, QuizzesQuestionsCreationAttributes> implements QuizzesQuestionsAttributes {
  declare id?: string;
  declare quizId: string;
  declare question: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof QuizzesQuestions {
    QuizzesQuestions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        quizId: { type: DataTypes.UUID, allowNull: false,
            field: 'quiz_id'
        },
        question: { type: DataTypes.TEXT, allowNull: false,
            field: 'question'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
