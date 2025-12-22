import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EventsAttributes {
  id: string;
  name: string;
  registrationCloseDate: Date;
  dateStart: Date;
  dateEnd: Date;
  description: string;
  capacity: number;
  thumbnail: string;
  contactPersonName: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  typeOrder: string;
  typeEvent: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  registrationStartDate?: Date;
  price?: number;
  contactPersonPosition?: string;
  location?: string;
  thumbnailId?: number;
}

export type EventsPk = "id";
export type EventsId = Events[EventsPk];
export type EventsOptionalAttributes = "deletedAt" | "registrationStartDate" | "price" | "contactPersonPosition" | "location" | "thumbnailId";
export type EventsCreationAttributes = Optional<EventsAttributes, EventsOptionalAttributes>;

export class Events extends Model<EventsAttributes, EventsCreationAttributes> implements EventsAttributes {
  id!: string;
  name!: string;
  registrationCloseDate!: Date;
  dateStart!: Date;
  dateEnd!: Date;
  description!: string;
  capacity!: number;
  thumbnail!: string;
  contactPersonName!: string;
  contactPersonPhone!: string;
  contactPersonEmail!: string;
  typeOrder!: string;
  typeEvent!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  registrationStartDate?: Date;
  price?: number;
  contactPersonPosition?: string;
  location?: string;
  thumbnailId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Events {
    return Events.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    registrationCloseDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'registration_close_date'
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_start'
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'date_end'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contactPersonName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_person_name'
    },
    contactPersonPhone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_person_phone'
    },
    contactPersonEmail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_person_email'
    },
    typeOrder: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'type_order'
    },
    typeEvent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'type_event'
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
    },
    registrationStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'registration_start_date'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contactPersonPosition: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'contact_person_position'
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    thumbnailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'thumbnail_id'
    }
  }, {
    sequelize,
    tableName: 'events',
    schema: 'public',
    timestamps: false
  });
  }
}
