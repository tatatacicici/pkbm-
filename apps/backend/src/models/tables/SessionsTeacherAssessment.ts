import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsTeacherAssessmentAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  sessionNo: string;
  teacherId?: string;
  studentId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  assessmentId?: string;
  timestampTaken?: Date;
  timestampSubmitted?: Date;
}

export type SessionsTeacherAssessmentCreationAttributes = Optional<SessionsTeacherAssessmentAttributes, 'id' | 'teacherId' | 'deletedAt' | 'assessmentId' | 'timestampTaken' | 'timestampSubmitted'>;

export class SessionsTeacherAssessment extends Model<SessionsTeacherAssessmentAttributes, SessionsTeacherAssessmentCreationAttributes> implements SessionsTeacherAssessmentAttributes {
  declare pk: number;
  declare id?: string;
  declare subjectId: string;
  declare sessionId: string;
  declare sessionNo: string;
  declare teacherId?: string;
  declare studentId: string;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare assessmentId?: string;
  declare timestampTaken?: Date;
  declare timestampSubmitted?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsTeacherAssessment {
    SessionsTeacherAssessment.init(
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
        teacherId: { type: DataTypes.UUID, allowNull: true,
            field: 'teacher_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
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
        },
        timestampTaken: { type: DataTypes.DATE, allowNull: true,
            field: 'timestamp_taken'
        },
        timestampSubmitted: { type: DataTypes.DATE, allowNull: true,
            field: 'timestamp_submitted'
        }
      },
      {
        sequelize,
        tableName: 'sessions_teacher_assessment',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsTeacherAssessment;
  }
}
