import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsMessagesAttributes {
  pk?: any;
  id?: any;
  room_id?: any;
  user_id?: any;
  message?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ChatsRoomsMessagesCreationAttributes = Optional<ChatsRoomsMessagesAttributes, 'id'>;

export class ChatsRoomsMessages extends Model<ChatsRoomsMessagesAttributes, ChatsRoomsMessagesCreationAttributes> implements ChatsRoomsMessagesAttributes {
  declare pk?: any;
  declare id?: any;
  declare room_id?: any;
  declare user_id?: any;
  declare message?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
