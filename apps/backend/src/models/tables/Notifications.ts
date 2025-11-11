import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsAttributes {
  id?: string;
  title: string;
  message: string;
  seen_at?: Date;
  user_id: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  sender_id?: string;
  destination?: string;
  deleted_at?: Date;
  category?: string;
}

export type NotificationsCreationAttributes = Optional<NotificationsAttributes, 'id' | 'seen_at' | 'sender_id' | 'destination' | 'deleted_at' | 'category'>;

export class Notifications extends Model<NotificationsAttributes, NotificationsCreationAttributes> implements NotificationsAttributes {
  declare id?: string;
  declare title: string;
  declare message: string;
  declare seen_at?: Date;
  declare user_id: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare sender_id?: string;
  declare destination?: string;
  declare deleted_at?: Date;
  declare category?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Notifications {
    Notifications.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.TEXT, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        seen_at: { type: DataTypes.DATE, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        sender_id: { type: DataTypes.UUID, allowNull: true },
        destination: { type: DataTypes.TEXT, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        category: { type: DataTypes.STRING, allowNull: true }
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
