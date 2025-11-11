import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SurveysResponsesAttributes {
  pk: number;
  uuid?: string;
  surveyId: number;
  userId: string;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysResponsesOptionalAttributes = "pk" | "uuid" | "endDate" | "deletedAt";
export type SurveysResponsesCreationAttributes = Optional<SurveysResponsesAttributes, SurveysResponsesOptionalAttributes>;

export class SurveysResponses extends Model<SurveysResponsesAttributes, SurveysResponsesCreationAttributes> implements SurveysResponsesAttributes {
  pk!: number;
  uuid?: string;
  surveyId!: number;
  userId!: string;
  startDate!: Date;
  endDate?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SurveysResponses {
    return SurveysResponses.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    surveyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'survey_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_date'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'surveys_responses',
    schema: 'public',
    timestamps: false
  });
  }
}
