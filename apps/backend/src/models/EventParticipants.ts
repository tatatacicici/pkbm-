import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EventParticipantsAttributes {
  pk: number;
  uuid?: string;
  token: string;
  eventId: string;
  emailAddress: string;
  fullName: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type EventParticipantsOptionalAttributes = "pk" | "uuid" | "deletedAt";
export type EventParticipantsCreationAttributes = Optional<EventParticipantsAttributes, EventParticipantsOptionalAttributes>;

export class EventParticipants extends Model<EventParticipantsAttributes, EventParticipantsCreationAttributes> implements EventParticipantsAttributes {
  pk!: number;
  uuid?: string;
  token!: string;
  eventId!: string;
  emailAddress!: string;
  fullName!: string;
  phoneNumber!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof EventParticipants {
    return EventParticipants.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'event_id'
    },
    emailAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email_address'
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name'
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
    tableName: 'event_participants',
    schema: 'public',
    timestamps: false
  });
  }
}
