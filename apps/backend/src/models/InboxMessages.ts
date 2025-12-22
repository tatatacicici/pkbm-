import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface InboxMessagesAttributes {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  attachmentId?: number;
  attachmentUrl?: string;
  status: "DELIVERED" | "SEEN" | "UNSENT";
  isSeen: boolean;
  seenAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type InboxMessagesPk = "id";
export type InboxMessagesId = InboxMessages[InboxMessagesPk];
export type InboxMessagesOptionalAttributes = "attachmentId" | "attachmentUrl" | "seenAt" | "deletedAt";
export type InboxMessagesCreationAttributes = Optional<InboxMessagesAttributes, InboxMessagesOptionalAttributes>;

export class InboxMessages extends Model<InboxMessagesAttributes, InboxMessagesCreationAttributes> implements InboxMessagesAttributes {
  id!: string;
  senderId!: string;
  receiverId!: string;
  content!: string;
  attachmentId?: number;
  attachmentUrl?: string;
  status!: "DELIVERED" | "SEEN" | "UNSENT";
  isSeen!: boolean;
  seenAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof InboxMessages {
    return InboxMessages.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attachmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'attachment_id'
    },
    attachmentUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'attachment_url'
    },
    status: {
      type: DataTypes.ENUM("DELIVERED","SEEN","UNSENT"),
      allowNull: false
    },
    isSeen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    }
  }, {
    sequelize,
    tableName: 'inbox_messages',
    schema: 'public',
    timestamps: false
  });
  }
}
