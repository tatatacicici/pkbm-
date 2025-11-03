import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MeetingsAttributes {
  id: string;
  meetingType: string;
  schedules: Date[];
  place: string;
  topic: string;
  studentId: string;
  assessorId: string;
  status: string;
  grade?: number;
  pickedSchedule?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type MeetingsPk = "id";
export type MeetingsId = Meetings[MeetingsPk];
export type MeetingsOptionalAttributes = "grade" | "pickedSchedule" | "deletedAt";
export type MeetingsCreationAttributes = Optional<MeetingsAttributes, MeetingsOptionalAttributes>;

export class Meetings extends Model<MeetingsAttributes, MeetingsCreationAttributes> implements MeetingsAttributes {
  id!: string;
  meetingType!: string;
  schedules!: Date[];
  place!: string;
  topic!: string;
  studentId!: string;
  assessorId!: string;
  status!: string;
  grade?: number;
  pickedSchedule?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Meetings {
    return Meetings.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    meetingType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'meeting_type'
    },
    schedules: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    topic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    assessorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assessor_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    grade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    pickedSchedule: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'picked_schedule'
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
    tableName: 'meetings',
    schema: 'public',
    timestamps: false
  });
  }
}
