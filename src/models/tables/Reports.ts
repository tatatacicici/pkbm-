import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportsAttributes {
  id?: any;
  user_id?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  uuid?: any;
  activity_id?: any;
  status?: any;
  lessons_learned?: any;
  week_number?: any;
  start_date?: any;
  end_date?: any;
  user__id?: any;
}

export type ReportsCreationAttributes = Optional<ReportsAttributes, 'id'>;

export class Reports extends Model<ReportsAttributes, ReportsCreationAttributes> implements ReportsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare uuid?: any;
  declare activity_id?: any;
  declare status?: any;
  declare lessons_learned?: any;
  declare week_number?: any;
  declare start_date?: any;
  declare end_date?: any;
  declare user__id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Reports {
    Reports.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        activity_id: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        lessons_learned: { type: DataTypes.TEXT, allowNull: true },
        week_number: { type: DataTypes.INTEGER, allowNull: false },
        start_date: { type: DataTypes.DATE, allowNull: false },
        end_date: { type: DataTypes.DATE, allowNull: false },
        user__id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'reports',
        timestamps: true,
        underscored: false,
      }
    );
    return Reports;
  }
}
