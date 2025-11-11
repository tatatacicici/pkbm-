import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsConversationsAttributes {
  id?: any;
  creator_id?: any;
  last_message_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ChatsConversationsCreationAttributes = Optional<ChatsConversationsAttributes, 'id'>;

export class ChatsConversations extends Model<ChatsConversationsAttributes, ChatsConversationsCreationAttributes> implements ChatsConversationsAttributes {
  declare id?: any;
  declare creator_id?: any;
  declare last_message_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
