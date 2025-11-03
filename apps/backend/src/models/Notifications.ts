import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NotificationsAttributes {
  id: string;
  title: string;
  message: string;
  seenAt?: Date;
  userId: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  senderId?: string;
  destination?: string;
  deletedAt?: Date;
  category?: string;
}

export type NotificationsPk = "id";
export type NotificationsId = Notifications[NotificationsPk];
export type NotificationsOptionalAttributes = "seenAt" | "senderId" | "destination" | "deletedAt" | "category";
export type NotificationsCreationAttributes = Optional<NotificationsAttributes, NotificationsOptionalAttributes>;

export class Notifications extends Model<NotificationsAttributes, NotificationsCreationAttributes> implements NotificationsAttributes {
  id!: string;
  title!: string;
  message!: string;
  seenAt?: Date;
  userId!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  senderId?: string;
  destination?: string;
  deletedAt?: Date;
  category?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Notifications {
    return Notifications.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    seenAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'seen_at'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    senderId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'sender_id'
    },
    destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notifications',
    schema: 'public',
    timestamps: false
  });
  }
}
