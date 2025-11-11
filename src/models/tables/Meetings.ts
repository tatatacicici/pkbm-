import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MeetingsAttributes {
  id?: any;
  meeting_type?: any;
  schedules?: any;
  place?: any;
  topic?: any;
  student_id?: any;
  assessor_id?: any;
  status?: any;
  grade?: any;
  picked_schedule?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type MeetingsCreationAttributes = Optional<MeetingsAttributes, 'id'>;

export class Meetings extends Model<MeetingsAttributes, MeetingsCreationAttributes> implements MeetingsAttributes {
  declare id?: any;
  declare meeting_type?: any;
  declare schedules?: any;
  declare place?: any;
  declare topic?: any;
  declare student_id?: any;
  declare assessor_id?: any;
  declare status?: any;
  declare grade?: any;
  declare picked_schedule?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
