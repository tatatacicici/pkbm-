import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SurveysAttributes {
  pk: number;
  uuid?: string;
  name: string;
  description?: string;
  isActive?: boolean;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysOptionalAttributes = "pk" | "uuid" | "description" | "isActive" | "endDate" | "deletedAt";
export type SurveysCreationAttributes = Optional<SurveysAttributes, SurveysOptionalAttributes>;

export class Surveys extends Model<SurveysAttributes, SurveysCreationAttributes> implements SurveysAttributes {
  pk!: number;
  uuid?: string;
  name!: string;
  description?: string;
  isActive?: boolean;
  startDate!: Date;
  endDate?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Surveys {
    return Surveys.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      field: 'is_active'
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
    tableName: 'surveys',
    schema: 'public',
    timestamps: false
  });
  }
}
