import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsMessagesAttributes {
  pk: number;
  phone_number: string;
  message: string;
  type: string;
  status: string;
  delivered_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  user_id: string;
}

export type NotificationsMessagesCreationAttributes = Optional<NotificationsMessagesAttributes, 'id' | 'delivered_at' | 'deleted_at'>;

export class NotificationsMessages extends Model<NotificationsMessagesAttributes, NotificationsMessagesCreationAttributes> implements NotificationsMessagesAttributes {
  declare pk: number;
  declare phone_number: string;
  declare message: string;
  declare type: string;
  declare status: string;
  declare delivered_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare user_id: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof NotificationsMessages {
    NotificationsMessages.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        delivered_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false }
      },
      {
        sequelize,
        tableName: 'notifications_messages',
        timestamps: true,
        underscored: true,
      }
    );
    return NotificationsMessages;
  }
}
