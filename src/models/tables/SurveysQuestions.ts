import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysQuestionsAttributes {
  pk: number;
  uuid?: string;
  survey_id: number;
  question: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SurveysQuestionsCreationAttributes = Optional<SurveysQuestionsAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class SurveysQuestions extends Model<SurveysQuestionsAttributes, SurveysQuestionsCreationAttributes> implements SurveysQuestionsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare survey_id: number;
  declare question: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysQuestions {
    SurveysQuestions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        survey_id: { type: DataTypes.INTEGER, allowNull: false },
        question: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'surveys_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return SurveysQuestions;
  }
}
