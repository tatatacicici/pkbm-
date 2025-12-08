import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAnswersAttributes {
  id?: string;
  questionId: number;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  answerId?: string;
}

export type SessionsTeacherAssessmentQuestionsAnswersCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAnswersAttributes, 'id' | 'deletedAt' | 'answerId'>;

export class SessionsTeacherAssessmentQuestionsAnswers extends Model<SessionsTeacherAssessmentQuestionsAnswersAttributes, SessionsTeacherAssessmentQuestionsAnswersCreationAttributes> implements SessionsTeacherAssessmentQuestionsAnswersAttributes {
  declare id?: string;
  declare questionId: number;
  declare answer: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare answerId?: string;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentQuestionsAnswers {
    SessionsTeacherAssessmentQuestionsAnswers.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        questionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'question_id'
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
        },
        answerId: { type: DataTypes.UUID, allowNull: true,
            field: 'answer_id'
        }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment_questions_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentQuestionsAnswers;
  }
}
