import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentStudentsAnswersAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  subjectId: string;
  sessionId: string;
  questionId: number;
  studentId: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsTeacherAssessmentStudentsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentStudentsAnswersAttributes, 'id' | 'deletedAt'>;

export class SessionsTeacherAssessmentStudentsAnswers extends Model<SessionsTeacherAssessmentStudentsAnswersAttributes, SessionsTeacherAssessmentStudentsAnswersCreationAttributes> implements SessionsTeacherAssessmentStudentsAnswersAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare subjectId: string;
  declare sessionId: string;
  declare questionId: number;
  declare studentId: string;
  declare answer: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentStudentsAnswers {
    SessionsTeacherAssessmentStudentsAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assessmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        questionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'question_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        answer: { type: DataTypes.TEXT, allowNull: false,
            field: 'answer'
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
        tableName: 'sessions_teacher_assessment_students_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentStudentsAnswers;
  }
}
