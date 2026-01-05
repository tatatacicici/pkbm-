import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsTemplatesAttributes {
  pk: number;
  text: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type NotificationsTemplatesCreationAttributes = Optional<NotificationsTemplatesAttributes, 'pk' | 'deletedAt'>;

export class NotificationsTemplates extends Model<NotificationsTemplatesAttributes, NotificationsTemplatesCreationAttributes> implements NotificationsTemplatesAttributes {
  declare pk: number;
  declare text: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof NotificationsTemplates {
    NotificationsTemplates.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        text: { type: DataTypes.TEXT, allowNull: false,
            field: 'text'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
