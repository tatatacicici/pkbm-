import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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

export type RoleplaysSessionsPk = "id";
export type RoleplaysSessionsId = RoleplaysSessions[RoleplaysSessionsPk];
export type RoleplaysSessionsOptionalAttributes = "pk" | "id" | "endAt" | "deletedAt";
export type RoleplaysSessionsCreationAttributes = Optional<RoleplaysSessionsAttributes, RoleplaysSessionsOptionalAttributes>;

export class RoleplaysSessions extends Model<RoleplaysSessionsAttributes, RoleplaysSessionsCreationAttributes> implements RoleplaysSessionsAttributes {
  pk!: number;
  id?: string;
  roleplayId!: number;
  teamId!: number;
  scheduleId!: number;
  status!: string;
  startAt!: Date;
  endAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RoleplaysSessions {
    return RoleplaysSessions.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
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
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'schedule_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_at'
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_at'
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
    tableName: 'roleplays_sessions',
    schema: 'public',
    timestamps: false
  });
  }
}
