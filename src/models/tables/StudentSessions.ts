import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSessionsAttributes {
  id?: any;
  session_id?: any;
  student_id?: any;
  date_present?: any;
  final_score?: any;
  is_present?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type StudentSessionsCreationAttributes = Optional<StudentSessionsAttributes, 'id'>;

export class StudentSessions extends Model<StudentSessionsAttributes, StudentSessionsCreationAttributes> implements StudentSessionsAttributes {
  declare id?: any;
  declare session_id?: any;
  declare student_id?: any;
  declare date_present?: any;
  declare final_score?: any;
  declare is_present?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
