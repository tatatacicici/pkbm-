import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface EventsAttributes {
  id?: any;
  name?: any;
  registration_close_date?: any;
  date_start?: any;
  date_end?: any;
  description?: any;
  capacity?: any;
  thumbnail?: any;
  contact_person_name?: any;
  contact_person_phone?: any;
  contact_person_email?: any;
  type_order?: any;
  type_event?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  registration_start_date?: any;
  price?: any;
  contact_person_position?: any;
  location?: any;
  thumbnail_id?: any;
}

export type EventsCreationAttributes = Optional<EventsAttributes, 'id'>;

export class Events extends Model<EventsAttributes, EventsCreationAttributes> implements EventsAttributes {
  declare id?: any;
  declare name?: any;
  declare registration_close_date?: any;
  declare date_start?: any;
  declare date_end?: any;
  declare description?: any;
  declare capacity?: any;
  declare thumbnail?: any;
  declare contact_person_name?: any;
  declare contact_person_phone?: any;
  declare contact_person_email?: any;
  declare type_order?: any;
  declare type_event?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare registration_start_date?: any;
  declare price?: any;
  declare contact_person_position?: any;
  declare location?: any;
  declare thumbnail_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Events {
    Events.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        registration_close_date: { type: DataTypes.DATE, allowNull: false },
        date_start: { type: DataTypes.DATE, allowNull: false },
        date_end: { type: DataTypes.DATE, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        capacity: { type: DataTypes.INTEGER, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
        contact_person_name: { type: DataTypes.STRING, allowNull: false },
        contact_person_phone: { type: DataTypes.STRING, allowNull: false },
        contact_person_email: { type: DataTypes.STRING, allowNull: false },
        type_order: { type: DataTypes.STRING, allowNull: false },
        type_event: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        registration_start_date: { type: DataTypes.DATE, allowNull: true },
        price: { type: DataTypes.INTEGER, allowNull: true },
        contact_person_position: { type: DataTypes.STRING, allowNull: true },
        location: { type: DataTypes.STRING, allowNull: true },
        thumbnail_id: { type: DataTypes.INTEGER, allowNull: true }
      },
      {
        sequelize,
        tableName: 'events',
        timestamps: true,
        underscored: false,
      }
    );
    return Events;
  }
}
