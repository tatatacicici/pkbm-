import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsMembersAttributes {
  pk: number;
  id?: string;
  roleplay_id: number;
  team_id: number;
  user_id: string;
  schedule_id: number;
  status: string;
  joined_at: Date;
  left_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RoleplaysTeamsMembersCreationAttributes = Optional<RoleplaysTeamsMembersAttributes, 'id' | 'left_at' | 'deleted_at'>;

export class RoleplaysTeamsMembers extends Model<RoleplaysTeamsMembersAttributes, RoleplaysTeamsMembersCreationAttributes> implements RoleplaysTeamsMembersAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplay_id: number;
  declare team_id: number;
  declare user_id: string;
  declare schedule_id: number;
  declare status: string;
  declare joined_at: Date;
  declare left_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysTeamsMembers {
    RoleplaysTeamsMembers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        roleplay_id: { type: DataTypes.INTEGER, allowNull: false },
        team_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        schedule_id: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        joined_at: { type: DataTypes.DATE, allowNull: false },
        left_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
