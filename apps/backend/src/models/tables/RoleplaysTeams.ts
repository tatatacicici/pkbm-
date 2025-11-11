import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysTeamsAttributes {
  pk: number;
  id?: string;
  roleplay_id: number;
  master_id: string;
  number: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  student_id?: string;
}

export type RoleplaysTeamsCreationAttributes = Optional<RoleplaysTeamsAttributes, 'id' | 'deleted_at' | 'student_id'>;

export class RoleplaysTeams extends Model<RoleplaysTeamsAttributes, RoleplaysTeamsCreationAttributes> implements RoleplaysTeamsAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplay_id: number;
  declare master_id: string;
  declare number: string;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare student_id?: string;

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
