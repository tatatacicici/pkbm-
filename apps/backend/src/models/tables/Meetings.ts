import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MeetingsAttributes {
  id?: string;
  meetingType: string;
  schedules: Date;
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

export type MeetingsCreationAttributes = Optional<MeetingsAttributes, 'id' | 'grade' | 'pickedSchedule' | 'deletedAt'>;

export class Meetings extends Model<MeetingsAttributes, MeetingsCreationAttributes> implements MeetingsAttributes {
  declare id?: string;
  declare meetingType: string;
  declare schedules: Date;
  declare place: string;
  declare topic: string;
  declare studentId: string;
  declare assessorId: string;
  declare status: string;
  declare grade?: number;
  declare pickedSchedule?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Meetings {
    Meetings.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        meetingType: { type: DataTypes.STRING, allowNull: false,
            field: 'meeting_type'
        },
        schedules: { type: DataTypes.DATE, allowNull: false,
            field: 'schedules'
        },
        place: { type: DataTypes.STRING, allowNull: false,
            field: 'place'
        },
        topic: { type: DataTypes.STRING, allowNull: false,
            field: 'topic'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        grade: { type: DataTypes.DOUBLE, allowNull: true,
            field: 'grade'
        },
        pickedSchedule: { type: DataTypes.DATE, allowNull: true,
            field: 'picked_schedule'
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
        tableName: 'meetings',
        timestamps: true,
        underscored: false,
      }
    );
    return Meetings;
  }
}
