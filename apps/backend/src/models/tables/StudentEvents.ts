import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentEventsAttributes {
  id?: string;
  studentId: string;
  eventId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StudentEventsCreationAttributes = Optional<StudentEventsAttributes, 'id' | 'deletedAt'>;

export class StudentEvents extends Model<StudentEventsAttributes, StudentEventsCreationAttributes> implements StudentEventsAttributes {
  declare id?: string;
  declare studentId: string;
  declare eventId: string;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentEvents {
    StudentEvents.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        eventId: { type: DataTypes.UUID, allowNull: false,
            field: 'event_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
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
        tableName: 'student_events',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentEvents;
  }
}
