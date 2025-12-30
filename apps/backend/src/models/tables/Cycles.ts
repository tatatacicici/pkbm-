import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CyclesAttributes {
  id?: number;
  uuid?: string;
  name: string;
  cycle: number;
  type: string;
  startDuration: Date;
  startRegistration: Date;
  endRegistration: Date;
  endDuration: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  status: string;
}

export type CyclesCreationAttributes = Optional<CyclesAttributes, 'id' | 'uuid' | 'deletedAt'>;

export class Cycles extends Model<CyclesAttributes, CyclesCreationAttributes> implements CyclesAttributes {
  declare id?: number;
  declare uuid?: string;
  declare name: string;
  declare cycle: number;
  declare type: string;
  declare startDuration: Date;
  declare startRegistration: Date;
  declare endRegistration: Date;
  declare endDuration: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare status: string;

  public static initModel(sequelize: Sequelize): typeof Cycles {
    Cycles.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        cycle: { type: DataTypes.INTEGER, allowNull: false,
            field: 'cycle'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        startDuration: { type: DataTypes.DATE, allowNull: false,
            field: 'start_duration'
        },
        startRegistration: { type: DataTypes.DATE, allowNull: false,
            field: 'start_registration'
        },
        endRegistration: { type: DataTypes.DATE, allowNull: false,
            field: 'end_registration'
        },
        endDuration: { type: DataTypes.DATE, allowNull: false,
            field: 'end_duration'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        }
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
