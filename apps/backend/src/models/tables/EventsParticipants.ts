import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

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

export type EventsParticipantsCreationAttributes = Optional<EventsParticipantsAttributes, 'id' | 'deletedAt'>;

export class EventsParticipants extends Model<EventsParticipantsAttributes, EventsParticipantsCreationAttributes> implements EventsParticipantsAttributes {
  declare pk: number;
  declare id?: string;
  declare eventId: string;
  declare userId: string;
  declare phoneNumber: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof EventsParticipants {
    EventsParticipants.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        eventId: { type: DataTypes.UUID, allowNull: false,
            field: 'event_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'phone_number'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
