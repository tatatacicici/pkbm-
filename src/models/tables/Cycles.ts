import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CyclesAttributes {
  id?: any;
  uuid?: any;
  name?: any;
  cycle?: any;
  type?: any;
  start_duration?: any;
  start_registration?: any;
  end_registration?: any;
  end_duration?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  status?: any;
}

export type CyclesCreationAttributes = Optional<CyclesAttributes, 'id'>;

export class Cycles extends Model<CyclesAttributes, CyclesCreationAttributes> implements CyclesAttributes {
  declare id?: any;
  declare uuid?: any;
  declare name?: any;
  declare cycle?: any;
  declare type?: any;
  declare start_duration?: any;
  declare start_registration?: any;
  declare end_registration?: any;
  declare end_duration?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare status?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Cycles {
    Cycles.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: false },
        cycle: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        start_duration: { type: DataTypes.DATE, allowNull: false },
        start_registration: { type: DataTypes.DATE, allowNull: false },
        end_registration: { type: DataTypes.DATE, allowNull: false },
        end_duration: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: false }
      },
      {
        sequelize,
        tableName: 'cycles',
        timestamps: true,
        underscored: false,
      }
    );
    return Cycles;
  }
}
