import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsMessagesAttributes {
  pk?: any;
  phone_number?: any;
  message?: any;
  type?: any;
  status?: any;
  delivered_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  user_id?: any;
}

export type NotificationsMessagesCreationAttributes = Optional<NotificationsMessagesAttributes, 'id'>;

export class NotificationsMessages extends Model<NotificationsMessagesAttributes, NotificationsMessagesCreationAttributes> implements NotificationsMessagesAttributes {
  declare pk?: any;
  declare phone_number?: any;
  declare message?: any;
  declare type?: any;
  declare status?: any;
  declare delivered_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare user_id?: any;

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
