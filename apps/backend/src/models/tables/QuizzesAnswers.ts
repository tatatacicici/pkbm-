import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface QuizzesAnswersAttributes {
  id?: string;
  questionId: string;
  answer: string;
  isCorrect: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  score?: number;
}

export type QuizzesAnswersCreationAttributes = Optional<QuizzesAnswersAttributes, 'id' | 'deletedAt' | 'score'>;

export class QuizzesAnswers extends Model<QuizzesAnswersAttributes, QuizzesAnswersCreationAttributes> implements QuizzesAnswersAttributes {
  declare id?: string;
  declare questionId: string;
  declare answer: string;
  declare isCorrect: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare score?: number;

  public static initModel(sequelize: Sequelize): typeof QuizzesAnswers {
    QuizzesAnswers.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        questionId: { type: DataTypes.UUID, allowNull: false,
            field: 'question_id'
        },
        answer: { type: DataTypes.TEXT, allowNull: false,
            field: 'answer'
        },
        isCorrect: { type: DataTypes.BOOLEAN, allowNull: false,
            field: 'is_correct'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        score: { type: DataTypes.DOUBLE, allowNull: true,
            field: 'score'
        }
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
