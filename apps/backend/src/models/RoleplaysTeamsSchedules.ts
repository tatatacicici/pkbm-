import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RoleplaysTeamsSchedulesAttributes {
  pk: number;
  id?: string;
  roleplayId: number;
  teamId: number;
  date: string;
  time: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplaysTeamsSchedulesPk = "id";
export type RoleplaysTeamsSchedulesId = RoleplaysTeamsSchedules[RoleplaysTeamsSchedulesPk];
export type RoleplaysTeamsSchedulesOptionalAttributes = "pk" | "id" | "deletedAt";
export type RoleplaysTeamsSchedulesCreationAttributes = Optional<RoleplaysTeamsSchedulesAttributes, RoleplaysTeamsSchedulesOptionalAttributes>;

export class RoleplaysTeamsSchedules extends Model<RoleplaysTeamsSchedulesAttributes, RoleplaysTeamsSchedulesCreationAttributes> implements RoleplaysTeamsSchedulesAttributes {
  pk!: number;
  id?: string;
  roleplayId!: number;
  teamId!: number;
  date!: string;
  time!: string;
  createdBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RoleplaysTeamsSchedules {
    return RoleplaysTeamsSchedules.init({
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'created_by'
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
    tableName: 'roleplays_teams_schedules',
    schema: 'public',
    timestamps: false
  });
  }
}
