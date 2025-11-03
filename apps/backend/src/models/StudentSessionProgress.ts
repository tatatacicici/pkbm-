import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StudentSessionProgressAttributes {
  id: string;
  studentId: string;
  sessionId: string;
  subjectId: string;
  status: string;
  type: string;
  score?: number;
  isLate: boolean;
  moduleAnswer?: string;
  timestampTaken: Date;
  timestampSubmitted?: Date;
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
  moduleId?: string;
  deletedAt?: Date;
  assignmentId?: string;
  timestampScored?: Date;
  quizId?: string;
}

export type StudentSessionProgressPk = "id";
export type StudentSessionProgressId = StudentSessionProgress[StudentSessionProgressPk];
export type StudentSessionProgressOptionalAttributes = "score" | "moduleAnswer" | "timestampSubmitted" | "deadline" | "moduleId" | "deletedAt" | "assignmentId" | "timestampScored" | "quizId";
export type StudentSessionProgressCreationAttributes = Optional<StudentSessionProgressAttributes, StudentSessionProgressOptionalAttributes>;

export class StudentSessionProgress extends Model<StudentSessionProgressAttributes, StudentSessionProgressCreationAttributes> implements StudentSessionProgressAttributes {
  id!: string;
  studentId!: string;
  sessionId!: string;
  subjectId!: string;
  status!: string;
  type!: string;
  score?: number;
  isLate!: boolean;
  moduleAnswer?: string;
  timestampTaken!: Date;
  timestampSubmitted?: Date;
  deadline?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  moduleId?: string;
  deletedAt?: Date;
  assignmentId?: string;
  timestampScored?: Date;
  quizId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof StudentSessionProgress {
    return StudentSessionProgress.init({
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
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    isLate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_late'
    },
    moduleAnswer: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'module_answer'
    },
    timestampTaken: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'timestamp_taken'
    },
    timestampSubmitted: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'timestamp_submitted'
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true
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
    moduleId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'module_id'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    assignmentId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'assignment_id'
    },
    timestampScored: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'timestamp_scored'
    },
    quizId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'quiz_id'
    }
  }, {
    sequelize,
    tableName: 'student_session_progress',
    schema: 'public',
    timestamps: false
  });
  }
}
