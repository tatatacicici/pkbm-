import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportActionsAttributes {
  id?: any;
  uuid?: any;
  user_id?: any;
  report_id?: any;
  mentor_id?: any;
  note?: any;
  created_at?: any;
  updated_at?: any;
}

export type ReportActionsCreationAttributes = Optional<ReportActionsAttributes, 'id'>;

export class ReportActions extends Model<ReportActionsAttributes, ReportActionsCreationAttributes> implements ReportActionsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare user_id?: any;
  declare report_id?: any;
  declare mentor_id?: any;
  declare note?: any;
  declare created_at?: any;
  declare updated_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ReportActions {
    ReportActions.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        report_id: { type: DataTypes.INTEGER, allowNull: false },
        mentor_id: { type: DataTypes.UUID, allowNull: false },
        note: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'report_actions',
        timestamps: true,
        underscored: true,
      }
    );
    return ReportActions;
  }
}
