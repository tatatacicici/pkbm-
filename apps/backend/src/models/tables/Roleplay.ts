import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayAttributes {
  id?: number;
  uuid?: string;
  topic: string;
  description: string;
  assessorId: string;
  session: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplayCreationAttributes = Optional<RoleplayAttributes, 'id' | 'uuid' | 'deletedAt'>;

export class Roleplay extends Model<RoleplayAttributes, RoleplayCreationAttributes> implements RoleplayAttributes {
  declare id?: number;
  declare uuid?: string;
  declare topic: string;
  declare description: string;
  declare assessorId: string;
  declare session: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Roleplay {
    Roleplay.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        topic: { type: DataTypes.STRING, allowNull: false,
            field: 'topic'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        session: { type: DataTypes.UUID, allowNull: false,
            field: 'session'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'roleplay',
        timestamps: true,
        underscored: false,
      }
    );
    return Roleplay;
  }
}
