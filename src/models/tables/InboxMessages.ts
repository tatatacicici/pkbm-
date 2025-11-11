import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface InboxMessagesAttributes {
  id?: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  attachment_id?: number;
  attachment_url?: string;
  is_seen: boolean;
  seen_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type InboxMessagesCreationAttributes = Optional<InboxMessagesAttributes, 'id' | 'attachment_id' | 'attachment_url' | 'seen_at' | 'deleted_at'>;

export class InboxMessages extends Model<InboxMessagesAttributes, InboxMessagesCreationAttributes> implements InboxMessagesAttributes {
  declare id?: string;
  declare sender_id: string;
  declare receiver_id: string;
  declare content: string;
  declare attachment_id?: number;
  declare attachment_url?: string;
  declare is_seen: boolean;
  declare seen_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof InboxMessages {
    InboxMessages.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        sender_id: { type: DataTypes.UUID, allowNull: false },
        receiver_id: { type: DataTypes.UUID, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        attachment_id: { type: DataTypes.INTEGER, allowNull: true },
        attachment_url: { type: DataTypes.TEXT, allowNull: true },
        is_seen: { type: DataTypes.BOOLEAN, allowNull: false },
        seen_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
