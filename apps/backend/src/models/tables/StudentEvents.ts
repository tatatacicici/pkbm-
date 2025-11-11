import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentEventsAttributes {
  id?: string;
  student_id: string;
  event_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type StudentEventsCreationAttributes = Optional<StudentEventsAttributes, 'id' | 'deleted_at'>;

export class StudentEvents extends Model<StudentEventsAttributes, StudentEventsCreationAttributes> implements StudentEventsAttributes {
  declare id?: string;
  declare student_id: string;
  declare event_id: string;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
