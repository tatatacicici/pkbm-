import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChatsConversationsAttributes {
  id: string;
  creatorId: string;
  lastMessageId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsConversationsPk = "id";
export type ChatsConversationsId = ChatsConversations[ChatsConversationsPk];
export type ChatsConversationsOptionalAttributes = "lastMessageId" | "deletedAt";
export type ChatsConversationsCreationAttributes = Optional<ChatsConversationsAttributes, ChatsConversationsOptionalAttributes>;

export class ChatsConversations extends Model<ChatsConversationsAttributes, ChatsConversationsCreationAttributes> implements ChatsConversationsAttributes {
  id!: string;
  creatorId!: string;
  lastMessageId?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ChatsConversations {
    return ChatsConversations.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    creatorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'creator_id'
    },
    lastMessageId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'last_message_id'
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
    }
  }, {
    sequelize,
    tableName: 'chats_conversations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chats_conversations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
