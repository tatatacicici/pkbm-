import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentEventsAttributes {
  id?: any;
  student_id?: any;
  event_id?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type StudentEventsCreationAttributes = Optional<StudentEventsAttributes, 'id'>;

export class StudentEvents extends Model<StudentEventsAttributes, StudentEventsCreationAttributes> implements StudentEventsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare event_id?: any;
  declare status?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentEvents {
    StudentEvents.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        event_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
