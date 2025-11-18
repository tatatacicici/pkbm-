import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type NotificationsMessagesCreationAttributes = Optional<NotificationsMessagesAttributes, 'id' | 'deliveredAt' | 'deletedAt'>;

export class NotificationsMessages extends Model<NotificationsMessagesAttributes, NotificationsMessagesCreationAttributes> implements NotificationsMessagesAttributes {
  declare pk: number;
  declare phoneNumber: string;
  declare message: string;
  declare type: string;
  declare status: string;
  declare deliveredAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare userId: string;

  public static initModel(sequelize: Sequelize): typeof NotificationsMessages {
    NotificationsMessages.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'phone_number'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        deliveredAt: { type: DataTypes.DATE, allowNull: true,
            field: 'delivered_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        }
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
