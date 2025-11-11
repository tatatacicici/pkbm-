import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportActionsAttributes {
  id?: number;
  uuid: string;
  user_id: string;
  report_id: number;
  mentor_id: string;
  note: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ReportActionsCreationAttributes = Optional<ReportActionsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class ReportActions extends Model<ReportActionsAttributes, ReportActionsCreationAttributes> implements ReportActionsAttributes {
  declare id?: number;
  declare uuid: string;
  declare user_id: string;
  declare report_id: number;
  declare mentor_id: string;
  declare note: string;
  declare created_at?: Date;
  declare updated_at?: Date;

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
