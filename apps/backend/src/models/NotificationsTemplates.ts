import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface NotificationsTemplatesAttributes {
  pk: number;
  text: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type NotificationsTemplatesOptionalAttributes = "pk" | "deletedAt";
export type NotificationsTemplatesCreationAttributes = Optional<NotificationsTemplatesAttributes, NotificationsTemplatesOptionalAttributes>;

export class NotificationsTemplates extends Model<NotificationsTemplatesAttributes, NotificationsTemplatesCreationAttributes> implements NotificationsTemplatesAttributes {
  pk!: number;
  text!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof NotificationsTemplates {
    return NotificationsTemplates.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'notifications_templates',
    schema: 'public',
    timestamps: false
  });
  }
}
