import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysSessionsAttributes {
  pk?: any;
  id?: any;
  roleplay_id?: any;
  team_id?: any;
  schedule_id?: any;
  status?: any;
  start_at?: any;
  end_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplaysSessionsCreationAttributes = Optional<RoleplaysSessionsAttributes, 'id'>;

export class RoleplaysSessions extends Model<RoleplaysSessionsAttributes, RoleplaysSessionsCreationAttributes> implements RoleplaysSessionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare roleplay_id?: any;
  declare team_id?: any;
  declare schedule_id?: any;
  declare status?: any;
  declare start_at?: any;
  declare end_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysSessions {
    RoleplaysSessions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        roleplay_id: { type: DataTypes.INTEGER, allowNull: false },
        team_id: { type: DataTypes.INTEGER, allowNull: false },
        schedule_id: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        start_at: { type: DataTypes.DATE, allowNull: false },
        end_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'roleplays_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplaysSessions;
  }
}
