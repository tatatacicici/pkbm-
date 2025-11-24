import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsSchedulesAttributes {
  pk: number;
  id?: string;
  roleplayId: number;
  teamId: number;
  date: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplaysTeamsSchedulesCreationAttributes = Optional<RoleplaysTeamsSchedulesAttributes, 'id' | 'deletedAt'>;

export class RoleplaysTeamsSchedules extends Model<RoleplaysTeamsSchedulesAttributes, RoleplaysTeamsSchedulesCreationAttributes> implements RoleplaysTeamsSchedulesAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplayId: number;
  declare teamId: number;
  declare date: Date;
  declare createdBy: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysTeamsSchedules {
    RoleplaysTeamsSchedules.init(
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
        date: { type: DataTypes.DATEONLY, allowNull: false,
            field: 'date'
        },
        createdBy: { type: DataTypes.UUID, allowNull: false,
            field: 'created_by'
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
        tableName: 'roleplays_teams_schedules',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplaysTeamsSchedules;
  }
}
