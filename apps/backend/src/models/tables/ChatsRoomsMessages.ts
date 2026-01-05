import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsMessagesAttributes {
  pk: number;
  id?: string;
  roomId: number;
  userId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsRoomsMessagesCreationAttributes = Optional<ChatsRoomsMessagesAttributes, 'id' | 'deletedAt'>;

export class ChatsRoomsMessages extends Model<ChatsRoomsMessagesAttributes, ChatsRoomsMessagesCreationAttributes> implements ChatsRoomsMessagesAttributes {
  declare pk: number;
  declare id?: string;
  declare roomId: number;
  declare userId: string;
  declare message: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsRoomsMessages {
    ChatsRoomsMessages.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        roomId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'room_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
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
        tableName: 'chats_rooms_messages',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsRoomsMessages;
  }
}
