import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSessionProgressAttributes {
  id?: string;
  student_id: string;
  session_id: string;
  subject_id: string;
  status: string;
  type: string;
  score?: number;
  is_late?: boolean;
  module_answer?: string;
  timestamp_taken: Date;
  timestamp_submitted?: Date;
  deadline?: Date;
  created_at: Date;
  updated_at: Date;
  module_id?: string;
  deleted_at?: Date;
  assignment_id?: string;
  timestamp_scored?: Date;
  quiz_id?: string;
}

export type StudentSessionProgressCreationAttributes = Optional<StudentSessionProgressAttributes, 'id' | 'score' | 'is_late' | 'module_answer' | 'timestamp_submitted' | 'deadline' | 'module_id' | 'deleted_at' | 'assignment_id' | 'timestamp_scored' | 'quiz_id'>;

export class StudentSessionProgress extends Model<StudentSessionProgressAttributes, StudentSessionProgressCreationAttributes> implements StudentSessionProgressAttributes {
  declare id?: string;
  declare student_id: string;
  declare session_id: string;
  declare subject_id: string;
  declare status: string;
  declare type: string;
  declare score?: number;
  declare is_late?: boolean;
  declare module_answer?: string;
  declare timestamp_taken: Date;
  declare timestamp_submitted?: Date;
  declare deadline?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare module_id?: string;
  declare deleted_at?: Date;
  declare assignment_id?: string;
  declare timestamp_scored?: Date;
  declare quiz_id?: string;

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
