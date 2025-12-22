import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsMessagesAttributes {
  id?: string;
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

export type ChatsMessagesCreationAttributes = Optional<ChatsMessagesAttributes, 'id' | 'isSeen' | 'seenAt' | 'deletedAt' | 'conversationId'>;

export class ChatsMessages extends Model<ChatsMessagesAttributes, ChatsMessagesCreationAttributes> implements ChatsMessagesAttributes {
  declare id?: string;
  declare message: string;
  declare senderId: string;
  declare receiverId: string;
  declare isSeen?: boolean;
  declare seenAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare conversationId?: string;

  public static initModel(sequelize: Sequelize): typeof ChatsMessages {
    ChatsMessages.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
        },
        senderId: { type: DataTypes.UUID, allowNull: false,
            field: 'sender_id'
        },
        receiverId: { type: DataTypes.UUID, allowNull: false,
            field: 'receiver_id'
        },
        isSeen: { type: DataTypes.BOOLEAN, allowNull: true,
            field: 'is_seen'
        },
        seenAt: { type: DataTypes.DATE, allowNull: true,
            field: 'seen_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        conversationId: { type: DataTypes.UUID, allowNull: true,
            field: 'conversation_id'
        }
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
