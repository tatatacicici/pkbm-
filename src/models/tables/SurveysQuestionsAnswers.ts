import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysQuestionsAnswersAttributes {
  pk?: any;
  uuid?: any;
  question_id?: any;
  answer?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SurveysQuestionsAnswersCreationAttributes = Optional<SurveysQuestionsAnswersAttributes, 'id'>;

export class SurveysQuestionsAnswers extends Model<SurveysQuestionsAnswersAttributes, SurveysQuestionsAnswersCreationAttributes> implements SurveysQuestionsAnswersAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare question_id?: any;
  declare answer?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysQuestionsAnswers {
    SurveysQuestionsAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        question_id: { type: DataTypes.INTEGER, allowNull: false },
        answer: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
