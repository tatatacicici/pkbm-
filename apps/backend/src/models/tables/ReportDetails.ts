import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportDetailsAttributes {
  id?: number;
  uuid: string;
  user_id: string;
  report_id: number;
  detail: string;
  expresion_level: number;
  date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ReportDetailsCreationAttributes = Optional<ReportDetailsAttributes, 'id' | 'deleted_at'>;

export class ReportDetails extends Model<ReportDetailsAttributes, ReportDetailsCreationAttributes> implements ReportDetailsAttributes {
  declare id?: number;
  declare uuid: string;
  declare user_id: string;
  declare report_id: number;
  declare detail: string;
  declare expresion_level: number;
  declare date: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ReportDetails {
    ReportDetails.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        report_id: { type: DataTypes.INTEGER, allowNull: false },
        detail: { type: DataTypes.TEXT, allowNull: false },
        expresion_level: { type: DataTypes.INTEGER, allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'report_details',
        timestamps: true,
        underscored: true,
      }
    );
    return ReportDetails;
  }
}
