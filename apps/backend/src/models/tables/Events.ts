import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface EventsAttributes {
  id?: string;
  name: string;
  registration_close_date: Date;
  date_start: Date;
  date_end: Date;
  description: string;
  capacity: number;
  thumbnail: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  type_order: string;
  type_event: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  registration_start_date?: Date;
  price?: number;
  contact_person_position?: string;
  location?: string;
  thumbnail_id?: number;
}

export type EventsCreationAttributes = Optional<EventsAttributes, 'id' | 'deleted_at' | 'registration_start_date' | 'price' | 'contact_person_position' | 'location' | 'thumbnail_id'>;

export class Events extends Model<EventsAttributes, EventsCreationAttributes> implements EventsAttributes {
  declare id?: string;
  declare name: string;
  declare registration_close_date: Date;
  declare date_start: Date;
  declare date_end: Date;
  declare description: string;
  declare capacity: number;
  declare thumbnail: string;
  declare contact_person_name: string;
  declare contact_person_phone: string;
  declare contact_person_email: string;
  declare type_order: string;
  declare type_event: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare registration_start_date?: Date;
  declare price?: number;
  declare contact_person_position?: string;
  declare location?: string;
  declare thumbnail_id?: number;

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
