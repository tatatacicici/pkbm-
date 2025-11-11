import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsTemplatesAttributes {
  pk?: any;
  text?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type NotificationsTemplatesCreationAttributes = Optional<NotificationsTemplatesAttributes, 'id'>;

export class NotificationsTemplates extends Model<NotificationsTemplatesAttributes, NotificationsTemplatesCreationAttributes> implements NotificationsTemplatesAttributes {
  declare pk?: any;
  declare text?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof NotificationsTemplates {
    NotificationsTemplates.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        text: { type: DataTypes.TEXT, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'notifications_templates',
        timestamps: true,
        underscored: true,
      }
    );
    return NotificationsTemplates;
  }
}
