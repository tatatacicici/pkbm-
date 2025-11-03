import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RoleplaysTeamsAttributes {
  pk: number;
  id?: string;
  roleplayId: number;
  masterId: string;
  number: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  studentId?: string;
}

export type RoleplaysTeamsPk = "id";
export type RoleplaysTeamsId = RoleplaysTeams[RoleplaysTeamsPk];
export type RoleplaysTeamsOptionalAttributes = "pk" | "id" | "deletedAt" | "studentId";
export type RoleplaysTeamsCreationAttributes = Optional<RoleplaysTeamsAttributes, RoleplaysTeamsOptionalAttributes>;

export class RoleplaysTeams extends Model<RoleplaysTeamsAttributes, RoleplaysTeamsCreationAttributes> implements RoleplaysTeamsAttributes {
  pk!: number;
  id?: string;
  roleplayId!: number;
  masterId!: string;
  number!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  studentId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof RoleplaysTeams {
    return RoleplaysTeams.init({
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
    masterId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'master_id'
    },
    number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'student_id'
    }
  }, {
    sequelize,
    tableName: 'roleplays_teams',
    schema: 'public',
    timestamps: false
  });
  }
}
