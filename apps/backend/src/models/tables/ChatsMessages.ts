import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsMessagesAttributes {
  id?: string;
  message: string;
  sender_id: string;
  receiver_id: string;
  is_seen?: boolean;
  seen_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  conversation_id?: string;
}

export type ChatsMessagesCreationAttributes = Optional<ChatsMessagesAttributes, 'id' | 'is_seen' | 'seen_at' | 'deleted_at' | 'conversation_id'>;

export class ChatsMessages extends Model<ChatsMessagesAttributes, ChatsMessagesCreationAttributes> implements ChatsMessagesAttributes {
  declare id?: string;
  declare message: string;
  declare sender_id: string;
  declare receiver_id: string;
  declare is_seen?: boolean;
  declare seen_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare conversation_id?: string;

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
