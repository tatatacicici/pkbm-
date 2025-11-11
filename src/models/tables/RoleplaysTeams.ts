import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsAttributes {
  pk?: any;
  id?: any;
  roleplay_id?: any;
  master_id?: any;
  number?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  student_id?: any;
}

export type RoleplaysTeamsCreationAttributes = Optional<RoleplaysTeamsAttributes, 'id'>;

export class RoleplaysTeams extends Model<RoleplaysTeamsAttributes, RoleplaysTeamsCreationAttributes> implements RoleplaysTeamsAttributes {
  declare pk?: any;
  declare id?: any;
  declare roleplay_id?: any;
  declare master_id?: any;
  declare number?: any;
  declare status?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare student_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplaysTeams {
    RoleplaysTeams.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        roleplay_id: { type: DataTypes.INTEGER, allowNull: false },
        master_id: { type: DataTypes.UUID, allowNull: false },
        number: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        student_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'roleplays_teams',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplaysTeams;
  }
}
