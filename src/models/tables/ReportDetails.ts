import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportDetailsAttributes {
  id?: any;
  uuid?: any;
  user_id?: any;
  report_id?: any;
  detail?: any;
  expresion_level?: any;
  date?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ReportDetailsCreationAttributes = Optional<ReportDetailsAttributes, 'id'>;

export class ReportDetails extends Model<ReportDetailsAttributes, ReportDetailsCreationAttributes> implements ReportDetailsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare user_id?: any;
  declare report_id?: any;
  declare detail?: any;
  declare expresion_level?: any;
  declare date?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
