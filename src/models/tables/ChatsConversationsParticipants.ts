import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsConversationsParticipantsAttributes {
  created_at?: any;
  updated_at?: any;
  conversation_id?: any;
  user_id?: any;
}

export type ChatsConversationsParticipantsCreationAttributes = Optional<ChatsConversationsParticipantsAttributes, 'id'>;

export class ChatsConversationsParticipants extends Model<ChatsConversationsParticipantsAttributes, ChatsConversationsParticipantsCreationAttributes> implements ChatsConversationsParticipantsAttributes {
  declare created_at?: any;
  declare updated_at?: any;
  declare conversation_id?: any;
  declare user_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsConversationsParticipants {
    ChatsConversationsParticipants.init(
      {
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        conversation_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false }
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
