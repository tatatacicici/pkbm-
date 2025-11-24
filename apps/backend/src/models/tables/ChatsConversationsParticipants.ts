import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsConversationsParticipantsAttributes {
  createdAt: Date;
  updatedAt: Date;
  conversationId: string;
  userId: string;
}

export type ChatsConversationsParticipantsCreationAttributes = Optional<
  ChatsConversationsParticipantsAttributes,
  'createdAt' | 'updatedAt'
>;


export class ChatsConversationsParticipants extends Model<ChatsConversationsParticipantsAttributes, ChatsConversationsParticipantsCreationAttributes> implements ChatsConversationsParticipantsAttributes {
  declare createdAt: Date;
  declare updatedAt: Date;
  declare conversationId: string;
  declare userId: string;

  public static initModel(sequelize: Sequelize): typeof ChatsConversationsParticipants {
    ChatsConversationsParticipants.init(
      {
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        conversationId: { type: DataTypes.UUID, allowNull: false,
            field: 'conversation_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        }
      },
      {
        sequelize,
        tableName: 'chats_conversations_participants',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsConversationsParticipants;
  }
}
