import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ActivitiesAttributes {
  id?: number;
  uuid: string;
  position_id: number;
  user_id: string;
  status: string;
  type: string;
  start_date?: Date;
  end_date?: Date;
  is_expired?: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ActivitiesCreationAttributes = Optional<ActivitiesAttributes, 'id' | 'start_date' | 'end_date' | 'is_expired' | 'deleted_at'>;

export class Activities extends Model<ActivitiesAttributes, ActivitiesCreationAttributes> implements ActivitiesAttributes {
  declare id?: number;
  declare uuid: string;
  declare position_id: number;
  declare user_id: string;
  declare status: string;
  declare type: string;
  declare start_date?: Date;
  declare end_date?: Date;
  declare is_expired?: boolean;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Activities {
    Activities.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        position_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        start_date: { type: DataTypes.DATE, allowNull: true },
        end_date: { type: DataTypes.DATE, allowNull: true },
        is_expired: { type: DataTypes.BOOLEAN, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'activities',
        timestamps: true,
        underscored: false,
      }
    );
    return Activities;
  }
}
