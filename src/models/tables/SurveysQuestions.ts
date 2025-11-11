import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysQuestionsAttributes {
  pk?: any;
  uuid?: any;
  survey_id?: any;
  question?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SurveysQuestionsCreationAttributes = Optional<SurveysQuestionsAttributes, 'id'>;

export class SurveysQuestions extends Model<SurveysQuestionsAttributes, SurveysQuestionsCreationAttributes> implements SurveysQuestionsAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare survey_id?: any;
  declare question?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
