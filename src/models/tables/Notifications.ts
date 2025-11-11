import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface NotificationsAttributes {
  id?: any;
  title?: any;
  message?: any;
  seen_at?: any;
  user_id?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  sender_id?: any;
  destination?: any;
  deleted_at?: any;
  category?: any;
}

export type NotificationsCreationAttributes = Optional<NotificationsAttributes, 'id'>;

export class Notifications extends Model<NotificationsAttributes, NotificationsCreationAttributes> implements NotificationsAttributes {
  declare id?: any;
  declare title?: any;
  declare message?: any;
  declare seen_at?: any;
  declare user_id?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare sender_id?: any;
  declare destination?: any;
  declare deleted_at?: any;
  declare category?: any;

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
