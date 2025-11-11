import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MeetingsAttributes {
  id?: string;
  meeting_type: string;
  schedules: Date;
  place: string;
  topic: string;
  student_id: string;
  assessor_id: string;
  status: string;
  grade?: number;
  picked_schedule?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type MeetingsCreationAttributes = Optional<MeetingsAttributes, 'id' | 'grade' | 'picked_schedule' | 'deleted_at'>;

export class Meetings extends Model<MeetingsAttributes, MeetingsCreationAttributes> implements MeetingsAttributes {
  declare id?: string;
  declare meeting_type: string;
  declare schedules: Date;
  declare place: string;
  declare topic: string;
  declare student_id: string;
  declare assessor_id: string;
  declare status: string;
  declare grade?: number;
  declare picked_schedule?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Meetings {
    Meetings.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        meeting_type: { type: DataTypes.STRING, allowNull: false },
        schedules: { type: DataTypes.DATE, allowNull: false },
        place: { type: DataTypes.STRING, allowNull: false },
        topic: { type: DataTypes.STRING, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        grade: { type: DataTypes.DOUBLE, allowNull: true },
        picked_schedule: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
