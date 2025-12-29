import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ActivitiesAttributes {
  id?: number;
  uuid: string;
  positionId: number;
  userId: string;
  status: string;
  type: string;
  startDate?: Date;
  endDate?: Date;
  isExpired?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}


export type ActivitiesCreationAttributes = Optional<ActivitiesAttributes, 'id' | 'startDate' | 'endDate' | 'isExpired' | 'deletedAt'>;

export class Activities extends Model<ActivitiesAttributes, ActivitiesCreationAttributes> implements ActivitiesAttributes {
  declare id?: number;
  declare uuid: string;
  declare positionId: number;
  declare userId: string;
  declare status: string;
  declare type: string;
  declare startDate?: Date;
  declare endDate?: Date;
  declare isExpired?: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;



  public static initModel(sequelize: Sequelize): typeof Activities {
    Activities.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: false,
            field: 'uuid'
        },
        positionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'position_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        startDate: { type: DataTypes.DATE, allowNull: true,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: true,
            field: 'end_date'
        },
        isExpired: { type: DataTypes.BOOLEAN, allowNull: true,
            field: 'is_expired'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
