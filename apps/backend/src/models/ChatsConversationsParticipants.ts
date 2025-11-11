import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChatsConversationsParticipantsAttributes {
  createdAt: Date;
  updatedAt: Date;
  conversationId: string;
  userId: string;
}

export type ChatsConversationsParticipantsPk = "conversationId" | "userId";
export type ChatsConversationsParticipantsId = ChatsConversationsParticipants[ChatsConversationsParticipantsPk];
export type ChatsConversationsParticipantsCreationAttributes = ChatsConversationsParticipantsAttributes;

export class ChatsConversationsParticipants extends Model<ChatsConversationsParticipantsAttributes, ChatsConversationsParticipantsCreationAttributes> implements ChatsConversationsParticipantsAttributes {
  createdAt!: Date;
  updatedAt!: Date;
  conversationId!: string;
  userId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ChatsConversationsParticipants {
    return ChatsConversationsParticipants.init({
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
    conversationId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: 'conversation_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'chats_conversations_participants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chats_conversations_participants_pkey",
        unique: true,
        fields: [
          { name: "conversation_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
