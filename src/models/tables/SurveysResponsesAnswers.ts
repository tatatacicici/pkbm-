import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysResponsesAnswersAttributes {
  pk?: any;
  uuid?: any;
  response_id?: any;
  question_id?: any;
  answer?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  user_id?: any;
}

export type SurveysResponsesAnswersCreationAttributes = Optional<SurveysResponsesAnswersAttributes, 'id'>;

export class SurveysResponsesAnswers extends Model<SurveysResponsesAnswersAttributes, SurveysResponsesAnswersCreationAttributes> implements SurveysResponsesAnswersAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare response_id?: any;
  declare question_id?: any;
  declare answer?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare user_id?: any;

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
