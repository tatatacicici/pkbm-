import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSessionProgressAttributes {
  id?: any;
  student_id?: any;
  session_id?: any;
  subject_id?: any;
  status?: any;
  type?: any;
  score?: any;
  is_late?: any;
  module_answer?: any;
  timestamp_taken?: any;
  timestamp_submitted?: any;
  deadline?: any;
  created_at?: any;
  updated_at?: any;
  module_id?: any;
  deleted_at?: any;
  assignment_id?: any;
  timestamp_scored?: any;
  quiz_id?: any;
}

export type StudentSessionProgressCreationAttributes = Optional<StudentSessionProgressAttributes, 'id'>;

export class StudentSessionProgress extends Model<StudentSessionProgressAttributes, StudentSessionProgressCreationAttributes> implements StudentSessionProgressAttributes {
  declare id?: any;
  declare student_id?: any;
  declare session_id?: any;
  declare subject_id?: any;
  declare status?: any;
  declare type?: any;
  declare score?: any;
  declare is_late?: any;
  declare module_answer?: any;
  declare timestamp_taken?: any;
  declare timestamp_submitted?: any;
  declare deadline?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare module_id?: any;
  declare deleted_at?: any;
  declare assignment_id?: any;
  declare timestamp_scored?: any;
  declare quiz_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentSessionProgress {
    StudentSessionProgress.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        score: { type: DataTypes.DOUBLE, allowNull: true },
        is_late: { type: DataTypes.BOOLEAN },
        module_answer: { type: DataTypes.TEXT, allowNull: true },
        timestamp_taken: { type: DataTypes.DATE, allowNull: false },
        timestamp_submitted: { type: DataTypes.DATE, allowNull: true },
        deadline: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        module_id: { type: DataTypes.UUID, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        assignment_id: { type: DataTypes.UUID, allowNull: true },
        timestamp_scored: { type: DataTypes.DATE, allowNull: true },
        quiz_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'student_session_progress',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentSessionProgress;
  }
}
