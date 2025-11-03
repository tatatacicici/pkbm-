import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EventsParticipantsAttributes {
  pk: number;
  id?: string;
  eventId: string;
  userId: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type EventsParticipantsPk = "id";
export type EventsParticipantsId = EventsParticipants[EventsParticipantsPk];
export type EventsParticipantsOptionalAttributes = "pk" | "id" | "deletedAt";
export type EventsParticipantsCreationAttributes = Optional<EventsParticipantsAttributes, EventsParticipantsOptionalAttributes>;

export class EventsParticipants extends Model<EventsParticipantsAttributes, EventsParticipantsCreationAttributes> implements EventsParticipantsAttributes {
  pk!: number;
  id?: string;
  eventId!: string;
  userId!: string;
  phoneNumber!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof EventsParticipants {
    return EventsParticipants.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'event_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'phone_number'
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
    }
  }, {
    sequelize,
    tableName: 'events_participants',
    schema: 'public',
    timestamps: false
  });
  }
}
