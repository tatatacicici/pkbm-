import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CyclesAttributes {
  id?: number;
  uuid?: string;
  name: string;
  cycle: number;
  type: string;
  start_duration: Date;
  start_registration: Date;
  end_registration: Date;
  end_duration: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  status: string;
}

export type CyclesCreationAttributes = Optional<CyclesAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class Cycles extends Model<CyclesAttributes, CyclesCreationAttributes> implements CyclesAttributes {
  declare id?: number;
  declare uuid?: string;
  declare name: string;
  declare cycle: number;
  declare type: string;
  declare start_duration: Date;
  declare start_registration: Date;
  declare end_registration: Date;
  declare end_duration: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare status: string;

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
