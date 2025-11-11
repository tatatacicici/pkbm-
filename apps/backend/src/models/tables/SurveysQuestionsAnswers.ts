import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysQuestionsAnswersAttributes {
  pk: number;
  uuid?: string;
  question_id: number;
  answer: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SurveysQuestionsAnswersCreationAttributes = Optional<SurveysQuestionsAnswersAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class SurveysQuestionsAnswers extends Model<SurveysQuestionsAnswersAttributes, SurveysQuestionsAnswersCreationAttributes> implements SurveysQuestionsAnswersAttributes {
  declare pk: number;
  declare uuid?: string;
  declare question_id: number;
  declare answer: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
