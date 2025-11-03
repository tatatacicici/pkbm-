import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NotificationsMessagesAttributes {
  pk: number;
  phoneNumber: string;
  message: string;
  type: string;
  status: string;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  userId: string;
}

export type NotificationsMessagesOptionalAttributes = "pk" | "deliveredAt" | "deletedAt";
export type NotificationsMessagesCreationAttributes = Optional<NotificationsMessagesAttributes, NotificationsMessagesOptionalAttributes>;

export class NotificationsMessages extends Model<NotificationsMessagesAttributes, NotificationsMessagesCreationAttributes> implements NotificationsMessagesAttributes {
  pk!: number;
  phoneNumber!: string;
  message!: string;
  type!: string;
  status!: string;
  deliveredAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  userId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof NotificationsMessages {
    return NotificationsMessages.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'phone_number'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'delivered_at'
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
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'notifications_messages',
    schema: 'public',
    timestamps: false
  });
  }
}
