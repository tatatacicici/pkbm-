import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  studentId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsCreationAttributes = Optional<SessionsReflectionsAttributes, 'id' | 'deletedAt'>;

export class SessionsReflections extends Model<SessionsReflectionsAttributes, SessionsReflectionsCreationAttributes> implements SessionsReflectionsAttributes {
  declare pk: number;
  declare id?: string;
  declare subjectId: string;
  declare sessionId: string;
  declare studentId: string;
  declare message: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflections {
    SessionsReflections.init(
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
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
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
        tableName: 'sessions_reflections',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflections;
  }
}
