import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsMembersAttributes {
  pk: number;
  id?: string;
  roleplayId: number;
  teamId: number;
  userId: string;
  scheduleId: number;
  status: string;
  joinedAt: Date;
  leftAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplaysTeamsMembersCreationAttributes = Optional<RoleplaysTeamsMembersAttributes, 'id' | 'leftAt' | 'deletedAt'>;

export class RoleplaysTeamsMembers extends Model<RoleplaysTeamsMembersAttributes, RoleplaysTeamsMembersCreationAttributes> implements RoleplaysTeamsMembersAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplayId: number;
  declare teamId: number;
  declare userId: string;
  declare scheduleId: number;
  declare status: string;
  declare joinedAt: Date;
  declare leftAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysTeamsMembers {
    RoleplaysTeamsMembers.init(
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
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        scheduleId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'schedule_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        joinedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'joined_at'
        },
        leftAt: { type: DataTypes.DATE, allowNull: true,
            field: 'left_at'
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
        tableName: 'roleplays_teams_members',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplaysTeamsMembers;
  }
}
