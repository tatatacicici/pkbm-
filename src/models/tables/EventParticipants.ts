import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface EventParticipantsAttributes {
  pk?: any;
  uuid?: any;
  token?: any;
  event_id?: any;
  email_address?: any;
  full_name?: any;
  phone_number?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type EventParticipantsCreationAttributes = Optional<EventParticipantsAttributes, 'id'>;

export class EventParticipants extends Model<EventParticipantsAttributes, EventParticipantsCreationAttributes> implements EventParticipantsAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare token?: any;
  declare event_id?: any;
  declare email_address?: any;
  declare full_name?: any;
  declare phone_number?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof EventParticipants {
    EventParticipants.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        token: { type: DataTypes.STRING, allowNull: false },
        event_id: { type: DataTypes.UUID, allowNull: false },
        email_address: { type: DataTypes.STRING, allowNull: false },
        full_name: { type: DataTypes.STRING, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'event_participants',
        timestamps: true,
        underscored: true,
      }
    );
    return EventParticipants;
  }
}
