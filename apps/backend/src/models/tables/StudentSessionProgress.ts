import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSessionProgressAttributes {
  id?: string;
  studentId: string;
  sessionId: string;
  subjectId: string;
  status: string;
  type: string;
  score?: number;
  isLate?: boolean;
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

export type StudentSessionProgressCreationAttributes = Optional<StudentSessionProgressAttributes, 'id' | 'score' | 'isLate' | 'moduleAnswer' | 'timestampSubmitted' | 'deadline' | 'moduleId' | 'deletedAt' | 'assignmentId' | 'timestampScored' | 'quizId'>;

export class StudentSessionProgress extends Model<StudentSessionProgressAttributes, StudentSessionProgressCreationAttributes> implements StudentSessionProgressAttributes {
  declare id?: string;
  declare studentId: string;
  declare sessionId: string;
  declare subjectId: string;
  declare status: string;
  declare type: string;
  declare score?: number;
  declare isLate?: boolean;
  declare moduleAnswer?: string;
  declare timestampTaken: Date;
  declare timestampSubmitted?: Date;
  declare deadline?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare moduleId?: string;
  declare deletedAt?: Date;
  declare assignmentId?: string;
  declare timestampScored?: Date;
  declare quizId?: string;

  public static initModel(sequelize: Sequelize): typeof StudentSessionProgress {
    StudentSessionProgress.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        score: { type: DataTypes.DOUBLE, allowNull: true,
            field: 'score'
        },
        isLate: { type: DataTypes.BOOLEAN,
            field: 'is_late'
        },
        moduleAnswer: { type: DataTypes.TEXT, allowNull: true,
            field: 'module_answer'
        },
        timestampTaken: { type: DataTypes.DATE, allowNull: false,
            field: 'timestamp_taken'
        },
        timestampSubmitted: { type: DataTypes.DATE, allowNull: true,
            field: 'timestamp_submitted'
        },
        deadline: { type: DataTypes.DATE, allowNull: true,
            field: 'deadline'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        moduleId: { type: DataTypes.UUID, allowNull: true,
            field: 'module_id'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        assignmentId: { type: DataTypes.UUID, allowNull: true,
            field: 'assignment_id'
        },
        timestampScored: { type: DataTypes.DATE, allowNull: true,
            field: 'timestamp_scored'
        },
        quizId: { type: DataTypes.UUID, allowNull: true,
            field: 'quiz_id'
        }
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
