import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysSessionsAttributes {
  pk: number;
  id?: string;
  roleplayId: number;
  teamId: number;
  scheduleId: number;
  status: string;
  startAt: Date;
  endAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplaysSessionsCreationAttributes = Optional<RoleplaysSessionsAttributes, 'id' | 'endAt' | 'deletedAt'>;

export class RoleplaysSessions extends Model<RoleplaysSessionsAttributes, RoleplaysSessionsCreationAttributes> implements RoleplaysSessionsAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplayId: number;
  declare teamId: number;
  declare scheduleId: number;
  declare status: string;
  declare startAt: Date;
  declare endAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysSessions {
    RoleplaysSessions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        roleplayId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'roleplay_id'
        },
        teamId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'team_id'
        },
        scheduleId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'schedule_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        startAt: { type: DataTypes.DATE, allowNull: false,
            field: 'start_at'
        },
        endAt: { type: DataTypes.DATE, allowNull: true,
            field: 'end_at'
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
        tableName: 'roleplays_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplaysSessions;
  }
}
