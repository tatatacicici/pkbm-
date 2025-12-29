import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsConversationsAttributes {
  id?: string;
  creatorId: string;
  lastMessageId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsConversationsCreationAttributes = Optional<ChatsConversationsAttributes, 'id' | 'lastMessageId' | 'deletedAt'>;

export class ChatsConversations extends Model<ChatsConversationsAttributes, ChatsConversationsCreationAttributes> implements ChatsConversationsAttributes {
  declare id?: string;
  declare creatorId: string;
  declare lastMessageId?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsConversations {
    ChatsConversations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        creatorId: { type: DataTypes.UUID, allowNull: false,
            field: 'creator_id'
        },
        lastMessageId: { type: DataTypes.UUID, allowNull: true,
            field: 'last_message_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
