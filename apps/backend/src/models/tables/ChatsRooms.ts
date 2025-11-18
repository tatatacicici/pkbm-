import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsAttributes {
  pk: number;
  id?: string;
  name: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsRoomsCreationAttributes = Optional<ChatsRoomsAttributes, 'id' | 'deletedAt'>;

export class ChatsRooms extends Model<ChatsRoomsAttributes, ChatsRoomsCreationAttributes> implements ChatsRoomsAttributes {
  declare pk: number;
  declare id?: string;
  declare name: string;
  declare createdBy: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsRooms {
    ChatsRooms.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        createdBy: { type: DataTypes.UUID, allowNull: false,
            field: 'created_by'
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
        tableName: 'chats_rooms',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsRooms;
  }
}
