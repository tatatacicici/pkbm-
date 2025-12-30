import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface EventsAttributes {
  id?: string;
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

export type EventsCreationAttributes = Optional<EventsAttributes, 'id' | 'deletedAt' | 'registrationStartDate' | 'price' | 'contactPersonPosition' | 'location' | 'thumbnailId'>;

export class Events extends Model<EventsAttributes, EventsCreationAttributes> implements EventsAttributes {
  declare id?: string;
  declare name: string;
  declare registrationCloseDate: Date;
  declare dateStart: Date;
  declare dateEnd: Date;
  declare description: string;
  declare capacity: number;
  declare thumbnail: string;
  declare contactPersonName: string;
  declare contactPersonPhone: string;
  declare contactPersonEmail: string;
  declare typeOrder: string;
  declare typeEvent: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare registrationStartDate?: Date;
  declare price?: number;
  declare contactPersonPosition?: string;
  declare location?: string;
  declare thumbnailId?: number;

  public static initModel(sequelize: Sequelize): typeof Events {
    Events.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        registrationCloseDate: { type: DataTypes.DATE, allowNull: false,
            field: 'registration_close_date'
        },
        dateStart: { type: DataTypes.DATE, allowNull: false,
            field: 'date_start'
        },
        dateEnd: { type: DataTypes.DATE, allowNull: false,
            field: 'date_end'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
        },
        capacity: { type: DataTypes.INTEGER, allowNull: false,
            field: 'capacity'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: false,
            field: 'thumbnail'
        },
        contactPersonName: { type: DataTypes.STRING, allowNull: false,
            field: 'contact_person_name'
        },
        contactPersonPhone: { type: DataTypes.STRING, allowNull: false,
            field: 'contact_person_phone'
        },
        contactPersonEmail: { type: DataTypes.STRING, allowNull: false,
            field: 'contact_person_email'
        },
        typeOrder: { type: DataTypes.STRING, allowNull: false,
            field: 'type_order'
        },
        typeEvent: { type: DataTypes.STRING, allowNull: false,
            field: 'type_event'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        registrationStartDate: { type: DataTypes.DATE, allowNull: true,
            field: 'registration_start_date'
        },
        price: { type: DataTypes.INTEGER, allowNull: true,
            field: 'price'
        },
        contactPersonPosition: { type: DataTypes.STRING, allowNull: true,
            field: 'contact_person_position'
        },
        location: { type: DataTypes.STRING, allowNull: true,
            field: 'location'
        },
        thumbnailId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'thumbnail_id'
        }
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
