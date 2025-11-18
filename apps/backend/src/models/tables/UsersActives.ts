import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersActivesAttributes {
  pk: number;
  uuid?: string;
  userId: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  lastActive?: Date;
}

export type UsersActivesCreationAttributes = Optional<UsersActivesAttributes, 'id' | 'uuid' | 'deletedAt' | 'lastActive'>;

export class UsersActives extends Model<UsersActivesAttributes, UsersActivesCreationAttributes> implements UsersActivesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare userId: string;
  declare date: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare lastActive?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersActives {
    UsersActives.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        date: { type: DataTypes.DATEONLY, allowNull: false,
            field: 'date'
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
        lastActive: { type: DataTypes.DATE, allowNull: true,
            field: 'last_active'
        }
      },
      {
        sequelize,
        tableName: 'users_actives',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersActives;
  }
}
