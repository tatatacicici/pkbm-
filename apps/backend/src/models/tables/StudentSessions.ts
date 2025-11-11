import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSessionsAttributes {
  id?: string;
  session_id: string;
  student_id: string;
  date_present?: Date;
  final_score?: number;
  is_present?: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type StudentSessionsCreationAttributes = Optional<StudentSessionsAttributes, 'id' | 'date_present' | 'final_score' | 'is_present' | 'deleted_at'>;

export class StudentSessions extends Model<StudentSessionsAttributes, StudentSessionsCreationAttributes> implements StudentSessionsAttributes {
  declare id?: string;
  declare session_id: string;
  declare student_id: string;
  declare date_present?: Date;
  declare final_score?: number;
  declare is_present?: boolean;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentSessions {
    StudentSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        date_present: { type: DataTypes.DATE, allowNull: true },
        final_score: { type: DataTypes.DOUBLE, allowNull: true },
        is_present: { type: DataTypes.BOOLEAN, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'student_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentSessions;
  }
}
