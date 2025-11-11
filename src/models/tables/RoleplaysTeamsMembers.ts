import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsMembersAttributes {
  pk?: any;
  id?: any;
  roleplay_id?: any;
  team_id?: any;
  user_id?: any;
  schedule_id?: any;
  status?: any;
  joined_at?: any;
  left_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplaysTeamsMembersCreationAttributes = Optional<RoleplaysTeamsMembersAttributes, 'id'>;

export class RoleplaysTeamsMembers extends Model<RoleplaysTeamsMembersAttributes, RoleplaysTeamsMembersCreationAttributes> implements RoleplaysTeamsMembersAttributes {
  declare pk?: any;
  declare id?: any;
  declare roleplay_id?: any;
  declare team_id?: any;
  declare user_id?: any;
  declare schedule_id?: any;
  declare status?: any;
  declare joined_at?: any;
  declare left_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
