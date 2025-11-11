import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsSchedulesAttributes {
  pk: number;
  id?: string;
  roleplay_id: number;
  team_id: number;
  date: Date;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RoleplaysTeamsSchedulesCreationAttributes = Optional<RoleplaysTeamsSchedulesAttributes, 'id' | 'deleted_at'>;

export class RoleplaysTeamsSchedules extends Model<RoleplaysTeamsSchedulesAttributes, RoleplaysTeamsSchedulesCreationAttributes> implements RoleplaysTeamsSchedulesAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplay_id: number;
  declare team_id: number;
  declare date: Date;
  declare created_by: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysTeamsSchedules {
    RoleplaysTeamsSchedules.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        roleplay_id: { type: DataTypes.INTEGER, allowNull: false },
        team_id: { type: DataTypes.INTEGER, allowNull: false },
        date: { type: DataTypes.DATEONLY, allowNull: false },
        created_by: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
