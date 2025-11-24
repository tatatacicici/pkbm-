import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentQuestionsAttributes {
  pk: number;
  id?: string;
  question: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsTeacherAssessmentQuestionsCreationAttributes = Optional<SessionsTeacherAssessmentQuestionsAttributes, 'id' | 'deletedAt'>;

export class SessionsTeacherAssessmentQuestions extends Model<SessionsTeacherAssessmentQuestionsAttributes, SessionsTeacherAssessmentQuestionsCreationAttributes> implements SessionsTeacherAssessmentQuestionsAttributes {
  declare pk: number;
  declare id?: string;
  declare question: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessmentQuestions {
    SessionsTeacherAssessmentQuestions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        question: { type: DataTypes.TEXT, allowNull: false,
            field: 'question'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
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
        tableName: 'sessions_teacher_assessment_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessmentQuestions;
  }
}
