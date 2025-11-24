import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysResponsesAnswersAttributes {
  pk: number;
  uuid?: string;
  responseId: number;
  questionId: number;
  answer?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  userId: string;
}

export type SurveysResponsesAnswersCreationAttributes = Optional<SurveysResponsesAnswersAttributes, 'pk' | 'uuid' | 'answer' | 'deletedAt'>;

export class SurveysResponsesAnswers extends Model<SurveysResponsesAnswersAttributes, SurveysResponsesAnswersCreationAttributes> implements SurveysResponsesAnswersAttributes {
  declare pk: number;
  declare uuid?: string;
  declare responseId: number;
  declare questionId: number;
  declare answer?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare userId: string;

  public static initModel(sequelize: Sequelize): typeof SurveysResponsesAnswers {
    SurveysResponsesAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        responseId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'response_id'
        },
        questionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'question_id'
        },
        answer: { type: DataTypes.TEXT, allowNull: true,
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
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        }
      },
      {
        sequelize,
        tableName: 'surveys_responses_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return SurveysResponsesAnswers;
  }
}
