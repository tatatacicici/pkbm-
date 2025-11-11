import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsMessagesAttributes {
  pk: number;
  id?: string;
  room_id: number;
  user_id: string;
  message: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ChatsRoomsMessagesCreationAttributes = Optional<ChatsRoomsMessagesAttributes, 'id' | 'deleted_at'>;

export class ChatsRoomsMessages extends Model<ChatsRoomsMessagesAttributes, ChatsRoomsMessagesCreationAttributes> implements ChatsRoomsMessagesAttributes {
  declare pk: number;
  declare id?: string;
  declare room_id: number;
  declare user_id: string;
  declare message: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsRoomsMessages {
    ChatsRoomsMessages.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        room_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
