import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StudentEventsAttributes {
  id: string;
  studentId: string;
  eventId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StudentEventsPk = "id";
export type StudentEventsId = StudentEvents[StudentEventsPk];
export type StudentEventsOptionalAttributes = "deletedAt";
export type StudentEventsCreationAttributes = Optional<StudentEventsAttributes, StudentEventsOptionalAttributes>;

export class StudentEvents extends Model<StudentEventsAttributes, StudentEventsCreationAttributes> implements StudentEventsAttributes {
  id!: string;
  studentId!: string;
  eventId!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof StudentEvents {
    return StudentEvents.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'event_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'student_events',
    schema: 'public',
    timestamps: false
  });
  }
}
