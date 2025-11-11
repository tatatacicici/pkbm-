import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysResponsesAnswersAttributes {
  pk: number;
  uuid?: string;
  response_id: number;
  question_id: number;
  answer?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  user_id: string;
}

export type SurveysResponsesAnswersCreationAttributes = Optional<SurveysResponsesAnswersAttributes, 'id' | 'uuid' | 'answer' | 'deleted_at'>;

export class SurveysResponsesAnswers extends Model<SurveysResponsesAnswersAttributes, SurveysResponsesAnswersCreationAttributes> implements SurveysResponsesAnswersAttributes {
  declare pk: number;
  declare uuid?: string;
  declare response_id: number;
  declare question_id: number;
  declare answer?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare user_id: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysResponsesAnswers {
    SurveysResponsesAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        response_id: { type: DataTypes.INTEGER, allowNull: false },
        question_id: { type: DataTypes.INTEGER, allowNull: false },
        answer: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false }
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
