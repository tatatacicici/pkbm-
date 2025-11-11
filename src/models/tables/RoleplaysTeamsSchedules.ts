import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsSchedulesAttributes {
  pk?: any;
  id?: any;
  roleplay_id?: any;
  team_id?: any;
  date?: any;
  created_by?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplaysTeamsSchedulesCreationAttributes = Optional<RoleplaysTeamsSchedulesAttributes, 'id'>;

export class RoleplaysTeamsSchedules extends Model<RoleplaysTeamsSchedulesAttributes, RoleplaysTeamsSchedulesCreationAttributes> implements RoleplaysTeamsSchedulesAttributes {
  declare pk?: any;
  declare id?: any;
  declare roleplay_id?: any;
  declare team_id?: any;
  declare date?: any;
  declare created_by?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
