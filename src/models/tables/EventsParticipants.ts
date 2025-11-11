import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface EventsParticipantsAttributes {
  pk?: any;
  id?: any;
  event_id?: any;
  user_id?: any;
  phone_number?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type EventsParticipantsCreationAttributes = Optional<EventsParticipantsAttributes, 'id'>;

export class EventsParticipants extends Model<EventsParticipantsAttributes, EventsParticipantsCreationAttributes> implements EventsParticipantsAttributes {
  declare pk?: any;
  declare id?: any;
  declare event_id?: any;
  declare user_id?: any;
  declare phone_number?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
