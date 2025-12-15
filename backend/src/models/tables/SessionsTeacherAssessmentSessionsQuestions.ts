import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentSessionsQuestionsAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  sessionNo: string;
  questionId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  assessmentId?: string;
}

export type SessionsTeacherAssessmentSessionsQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentSessionsQuestionsAttributes, 'id' | 'deletedAt' | 'assessmentId'>;

export class SessionsTeacherAssessmentSessionsQuestions extends Model<SessionsTeacherAssessmentSessionsQuestionsAttributes, SessionsTeacherAssessmentSessionsQuestionsCreationAttributes> implements SessionsTeacherAssessmentSessionsQuestionsAttributes {
  declare pk: number;
  declare id?: string;
  declare subjectId: string;
  declare sessionId: string;
  declare sessionNo: string;
  declare questionId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare assessmentId?: string;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentSessionsQuestions {
    SessionsTeacherAssessmentSessionsQuestions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        sessionNo: { type: DataTypes.STRING, allowNull: false,
            field: 'session_no'
        },
        questionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'question_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        assessmentId: { type: DataTypes.UUID, allowNull: true,
            field: 'assessment_id'
        }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment_sessions_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentSessionsQuestions;
  }
}
