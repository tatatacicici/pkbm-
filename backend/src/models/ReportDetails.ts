import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReportDetailsAttributes {
  id: number;
  uuid: string;
  userId: string;
  reportId: number;
  detail: string;
  expresionLevel: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ReportDetailsPk = "id";
export type ReportDetailsId = ReportDetails[ReportDetailsPk];
export type ReportDetailsOptionalAttributes = "id" | "deletedAt";
export type ReportDetailsCreationAttributes = Optional<ReportDetailsAttributes, ReportDetailsOptionalAttributes>;

export class ReportDetails extends Model<ReportDetailsAttributes, ReportDetailsCreationAttributes> implements ReportDetailsAttributes {
  id!: number;
  uuid!: string;
  userId!: string;
  reportId!: number;
  detail!: string;
  expresionLevel!: number;
  date!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ReportDetails {
    return ReportDetails.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'report_id'
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expresionLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'expresion_level'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'report_details',
    schema: 'public',
    timestamps: false
  });
  }
}
