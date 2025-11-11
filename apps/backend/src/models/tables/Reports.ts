import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportsAttributes {
  id?: number;
  user_id: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  uuid: string;
  activity_id: number;
  status: string;
  lessons_learned?: string;
  week_number: number;
  start_date: Date;
  end_date: Date;
  user__id?: string;
}

export type ReportsCreationAttributes = Optional<ReportsAttributes, 'id' | 'deleted_at' | 'lessons_learned' | 'user__id'>;

export class Reports extends Model<ReportsAttributes, ReportsCreationAttributes> implements ReportsAttributes {
  declare id?: number;
  declare user_id: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare uuid: string;
  declare activity_id: number;
  declare status: string;
  declare lessons_learned?: string;
  declare week_number: number;
  declare start_date: Date;
  declare end_date: Date;
  declare user__id?: string;

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
