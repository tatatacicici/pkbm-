import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsConversationsAttributes {
  id?: string;
  creator_id: string;
  last_message_id?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ChatsConversationsCreationAttributes = Optional<ChatsConversationsAttributes, 'id' | 'last_message_id' | 'deleted_at'>;

export class ChatsConversations extends Model<ChatsConversationsAttributes, ChatsConversationsCreationAttributes> implements ChatsConversationsAttributes {
  declare id?: string;
  declare creator_id: string;
  declare last_message_id?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsConversations {
    ChatsConversations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        creator_id: { type: DataTypes.UUID, allowNull: false },
        last_message_id: { type: DataTypes.UUID, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'chats_conversations',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsConversations;
  }
}
