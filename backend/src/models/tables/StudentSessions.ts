import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSessionsAttributes {
  id?: string;
  sessionId: string;
  studentId: string;
  datePresent?: Date;
  finalScore?: number;
  isPresent?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StudentSessionsCreationAttributes = Optional<StudentSessionsAttributes, 'id' | 'datePresent' | 'finalScore' | 'isPresent' | 'deletedAt'>;

export class StudentSessions extends Model<StudentSessionsAttributes, StudentSessionsCreationAttributes> implements StudentSessionsAttributes {
  declare id?: string;
  declare sessionId: string;
  declare studentId: string;
  declare datePresent?: Date;
  declare finalScore?: number;
  declare isPresent?: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentSessions {
    StudentSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        datePresent: { type: DataTypes.DATE, allowNull: true,
            field: 'date_present'
        },
        finalScore: { type: DataTypes.DOUBLE, allowNull: true,
            field: 'final_score'
        },
        isPresent: { type: DataTypes.BOOLEAN, allowNull: true,
            field: 'is_present'
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
        tableName: 'student_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentSessions;
  }
}
