import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChatsMessagesAttributes {
  id: string;
  message: string;
  senderId: string;
  receiverId: string;
  isSeen?: boolean;
  seenAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  conversationId?: string;
}

export type ChatsMessagesPk = "id";
export type ChatsMessagesId = ChatsMessages[ChatsMessagesPk];
export type ChatsMessagesOptionalAttributes = "isSeen" | "seenAt" | "deletedAt" | "conversationId";
export type ChatsMessagesCreationAttributes = Optional<ChatsMessagesAttributes, ChatsMessagesOptionalAttributes>;

export class ChatsMessages extends Model<ChatsMessagesAttributes, ChatsMessagesCreationAttributes> implements ChatsMessagesAttributes {
  id!: string;
  message!: string;
  senderId!: string;
  receiverId!: string;
  isSeen?: boolean;
  seenAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  conversationId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ChatsMessages {
    return ChatsMessages.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'sender_id'
    },
    receiverId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'receiver_id'
    },
    isSeen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'is_seen'
    },
    seenAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'seen_at'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    conversationId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'conversation_id'
    }
  }, {
    sequelize,
    tableName: 'chats_messages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chats_messages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
