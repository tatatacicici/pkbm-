import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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

export type RoleplaysTeamsMembersPk = "id";
export type RoleplaysTeamsMembersId = RoleplaysTeamsMembers[RoleplaysTeamsMembersPk];
export type RoleplaysTeamsMembersOptionalAttributes = "pk" | "id" | "leftAt" | "deletedAt";
export type RoleplaysTeamsMembersCreationAttributes = Optional<RoleplaysTeamsMembersAttributes, RoleplaysTeamsMembersOptionalAttributes>;

export class RoleplaysTeamsMembers extends Model<RoleplaysTeamsMembersAttributes, RoleplaysTeamsMembersCreationAttributes> implements RoleplaysTeamsMembersAttributes {
  pk!: number;
  id?: string;
  roleplayId!: number;
  teamId!: number;
  userId!: string;
  scheduleId!: number;
  status!: string;
  joinedAt!: Date;
  leftAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RoleplaysTeamsMembers {
    return RoleplaysTeamsMembers.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true
    },
    roleplayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'roleplay_id'
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'team_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'schedule_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    joinedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'joined_at'
    },
    leftAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'left_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'roleplays_teams_members',
    schema: 'public',
    timestamps: false
  });
  }
}
