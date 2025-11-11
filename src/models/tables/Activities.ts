import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ActivitiesAttributes {
  id?: any;
  uuid?: any;
  position_id?: any;
  user_id?: any;
  status?: any;
  type?: any;
  start_date?: any;
  end_date?: any;
  is_expired?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ActivitiesCreationAttributes = Optional<ActivitiesAttributes, 'id'>;

export class Activities extends Model<ActivitiesAttributes, ActivitiesCreationAttributes> implements ActivitiesAttributes {
  declare id?: any;
  declare uuid?: any;
  declare position_id?: any;
  declare user_id?: any;
  declare status?: any;
  declare type?: any;
  declare start_date?: any;
  declare end_date?: any;
  declare is_expired?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
