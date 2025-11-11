import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsMessagesAttributes {
  id?: any;
  message?: any;
  sender_id?: any;
  receiver_id?: any;
  is_seen?: any;
  seen_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  conversation_id?: any;
}

export type ChatsMessagesCreationAttributes = Optional<ChatsMessagesAttributes, 'id'>;

export class ChatsMessages extends Model<ChatsMessagesAttributes, ChatsMessagesCreationAttributes> implements ChatsMessagesAttributes {
  declare id?: any;
  declare message?: any;
  declare sender_id?: any;
  declare receiver_id?: any;
  declare is_seen?: any;
  declare seen_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare conversation_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsMessages {
    ChatsMessages.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        message: { type: DataTypes.TEXT, allowNull: false },
        sender_id: { type: DataTypes.UUID, allowNull: false },
        receiver_id: { type: DataTypes.UUID, allowNull: false },
        is_seen: { type: DataTypes.BOOLEAN, allowNull: true },
        seen_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        conversation_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'chats_messages',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsMessages;
  }
}
