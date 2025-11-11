import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysSessionsAttributes {
  pk: number;
  id?: string;
  roleplay_id: number;
  team_id: number;
  schedule_id: number;
  status: string;
  start_at: Date;
  end_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RoleplaysSessionsCreationAttributes = Optional<RoleplaysSessionsAttributes, 'id' | 'end_at' | 'deleted_at'>;

export class RoleplaysSessions extends Model<RoleplaysSessionsAttributes, RoleplaysSessionsCreationAttributes> implements RoleplaysSessionsAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplay_id: number;
  declare team_id: number;
  declare schedule_id: number;
  declare status: string;
  declare start_at: Date;
  declare end_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
