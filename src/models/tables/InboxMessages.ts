import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface InboxMessagesAttributes {
  id?: any;
  sender_id?: any;
  receiver_id?: any;
  content?: any;
  attachment_id?: any;
  attachment_url?: any;
  is_seen?: any;
  seen_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type InboxMessagesCreationAttributes = Optional<InboxMessagesAttributes, 'id'>;

export class InboxMessages extends Model<InboxMessagesAttributes, InboxMessagesCreationAttributes> implements InboxMessagesAttributes {
  declare id?: any;
  declare sender_id?: any;
  declare receiver_id?: any;
  declare content?: any;
  declare attachment_id?: any;
  declare attachment_url?: any;
  declare is_seen?: any;
  declare seen_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
