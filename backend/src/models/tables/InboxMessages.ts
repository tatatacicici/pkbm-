import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface InboxMessagesAttributes {
  id?: string;
  senderId: string;
  receiverId: string;
  content: string;
  attachmentId?: number;
  attachmentUrl?: string;
  isSeen: boolean;
  seenAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type InboxMessagesCreationAttributes = Optional<InboxMessagesAttributes, 'id' | 'attachmentId' | 'attachmentUrl' | 'seenAt' | 'deletedAt'>;

export class InboxMessages extends Model<InboxMessagesAttributes, InboxMessagesCreationAttributes> implements InboxMessagesAttributes {
  declare id?: string;
  declare senderId: string;
  declare receiverId: string;
  declare content: string;
  declare attachmentId?: number;
  declare attachmentUrl?: string;
  declare isSeen: boolean;
  declare seenAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof InboxMessages {
    InboxMessages.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        senderId: { type: DataTypes.UUID, allowNull: false,
            field: 'sender_id'
        },
        receiverId: { type: DataTypes.UUID, allowNull: false,
            field: 'receiver_id'
        },
        content: { type: DataTypes.TEXT, allowNull: false,
            field: 'content'
        },
        attachmentId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'attachment_id'
        },
        attachmentUrl: { type: DataTypes.TEXT, allowNull: true,
            field: 'attachment_url'
        },
        isSeen: { type: DataTypes.BOOLEAN, allowNull: false,
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
        }
      },
      {
        sequelize,
        tableName: 'inbox_messages',
        timestamps: true,
        underscored: true,
      }
    );
    return InboxMessages;
  }
}
