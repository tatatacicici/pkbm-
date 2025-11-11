import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsTemplatesAttributes {
  pk: number;
  text: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type NotificationsTemplatesCreationAttributes = Optional<NotificationsTemplatesAttributes, 'id' | 'deleted_at'>;

export class NotificationsTemplates extends Model<NotificationsTemplatesAttributes, NotificationsTemplatesCreationAttributes> implements NotificationsTemplatesAttributes {
  declare pk: number;
  declare text: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
