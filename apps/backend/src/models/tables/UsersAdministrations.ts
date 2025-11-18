import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersAdministrationsAttributes {
  id?: number;
  uuid?: string;
  userId: string;
  cycleId: number;
  type: string;
  status: string;
  actions?: any;
  approvedBy?: string;
  approvedAt?: Date;
}

export type UsersAdministrationsCreationAttributes = Optional<UsersAdministrationsAttributes, 'id' | 'uuid' | 'actions' | 'approvedBy' | 'approvedAt'>;

export class UsersAdministrations extends Model<UsersAdministrationsAttributes, UsersAdministrationsCreationAttributes> implements UsersAdministrationsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare userId: string;
  declare cycleId: number;
  declare type: string;
  declare status: string;
  declare actions?: any;
  declare approvedBy?: string;
  declare approvedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersAdministrations {
    UsersAdministrations.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        cycleId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'cycle_id'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        actions: { type: DataTypes.JSON, allowNull: true,
            field: 'actions'
        },
        approvedBy: { type: DataTypes.STRING, allowNull: true,
            field: 'approved_by'
        },
        approvedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'approved_at'
        }
      },
      {
        sequelize,
        tableName: 'users_administrations',
        timestamps: false,
        underscored: true,
      }
    );
    return UsersAdministrations;
  }
}
