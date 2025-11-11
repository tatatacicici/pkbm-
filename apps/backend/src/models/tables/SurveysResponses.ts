import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysResponsesAttributes {
  pk: number;
  uuid?: string;
  survey_id: number;
  user_id: string;
  start_date: Date;
  end_date?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SurveysResponsesCreationAttributes = Optional<SurveysResponsesAttributes, 'id' | 'uuid' | 'end_date' | 'deleted_at'>;

export class SurveysResponses extends Model<SurveysResponsesAttributes, SurveysResponsesCreationAttributes> implements SurveysResponsesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare survey_id: number;
  declare user_id: string;
  declare start_date: Date;
  declare end_date?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
