import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type RoleplaysTeamsCreationAttributes = Optional<RoleplaysTeamsAttributes, 'id' | 'deletedAt' | 'studentId'>;

export class RoleplaysTeams extends Model<RoleplaysTeamsAttributes, RoleplaysTeamsCreationAttributes> implements RoleplaysTeamsAttributes {
  declare pk: number;
  declare id?: string;
  declare roleplayId: number;
  declare masterId: string;
  declare number: string;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare studentId?: string;

  public static initModel(sequelize: Sequelize): typeof RoleplaysTeams {
    RoleplaysTeams.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        roleplayId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'roleplay_id'
        },
        masterId: { type: DataTypes.UUID, allowNull: false,
            field: 'master_id'
        },
        number: { type: DataTypes.STRING, allowNull: false,
            field: 'number'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        studentId: { type: DataTypes.UUID, allowNull: true,
            field: 'student_id'
        }
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
