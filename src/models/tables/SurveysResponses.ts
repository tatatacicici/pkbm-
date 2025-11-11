import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysResponsesAttributes {
  pk?: any;
  uuid?: any;
  survey_id?: any;
  user_id?: any;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SurveysResponsesCreationAttributes = Optional<SurveysResponsesAttributes, 'id'>;

export class SurveysResponses extends Model<SurveysResponsesAttributes, SurveysResponsesCreationAttributes> implements SurveysResponsesAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare survey_id?: any;
  declare user_id?: any;
  declare start_date?: any;
  declare end_date?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysResponses {
    SurveysResponses.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        survey_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        start_date: { type: DataTypes.DATE, allowNull: false },
        end_date: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'surveys_responses',
        timestamps: true,
        underscored: true,
      }
    );
    return SurveysResponses;
  }
}
