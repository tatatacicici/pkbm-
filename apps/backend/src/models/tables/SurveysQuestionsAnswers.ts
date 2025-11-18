import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysQuestionsAnswersAttributes {
  pk: number;
  uuid?: string;
  questionId: number;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysQuestionsAnswersCreationAttributes = Optional<SurveysQuestionsAnswersAttributes, 'id' | 'uuid' | 'deletedAt'>;

export class SurveysQuestionsAnswers extends Model<SurveysQuestionsAnswersAttributes, SurveysQuestionsAnswersCreationAttributes> implements SurveysQuestionsAnswersAttributes {
  declare pk: number;
  declare uuid?: string;
  declare questionId: number;
  declare answer: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysQuestionsAnswers {
    SurveysQuestionsAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        questionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'question_id'
        },
        answer: { type: DataTypes.TEXT, allowNull: false,
            field: 'answer'
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
        tableName: 'surveys_questions_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return SurveysQuestionsAnswers;
  }
}
