import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface EventsParticipantsAttributes {
  pk: number;
  id?: string;
  event_id: string;
  user_id: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type EventsParticipantsCreationAttributes = Optional<EventsParticipantsAttributes, 'id' | 'deleted_at'>;

export class EventsParticipants extends Model<EventsParticipantsAttributes, EventsParticipantsCreationAttributes> implements EventsParticipantsAttributes {
  declare pk: number;
  declare id?: string;
  declare event_id: string;
  declare user_id: string;
  declare phone_number: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof EventsParticipants {
    EventsParticipants.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        event_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'events_participants',
        timestamps: true,
        underscored: true,
      }
    );
    return EventsParticipants;
  }
}
