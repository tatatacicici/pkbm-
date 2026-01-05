import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsAttributes {
  id?: string;
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

export type NotificationsCreationAttributes = Optional<NotificationsAttributes, 'id' | 'seenAt' | 'senderId' | 'destination' | 'deletedAt' | 'category'>;

export class Notifications extends Model<NotificationsAttributes, NotificationsCreationAttributes> implements NotificationsAttributes {
  declare id?: string;
  declare title: string;
  declare message: string;
  declare seenAt?: Date;
  declare userId: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare senderId?: string;
  declare destination?: string;
  declare deletedAt?: Date;
  declare category?: string;

  public static initModel(sequelize: Sequelize): typeof Notifications {
    Notifications.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.TEXT, allowNull: false,
            field: 'title'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
        },
        seenAt: { type: DataTypes.DATE, allowNull: true,
            field: 'seen_at'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
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
        senderId: { type: DataTypes.UUID, allowNull: true,
            field: 'sender_id'
        },
        destination: { type: DataTypes.TEXT, allowNull: true,
            field: 'destination'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        category: { type: DataTypes.STRING, allowNull: true,
            field: 'category'
        }
      },
      {
        sequelize,
        tableName: 'notifications',
        timestamps: true,
        underscored: false,
      }
    );
    return Notifications;
  }
}
