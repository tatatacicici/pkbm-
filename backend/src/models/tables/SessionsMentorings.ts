import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsMentoringsAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  sessionId: string;
  teacherId: string;
  session?: number;
  title: string;
  content: string;
  duration: string;
  location: string;
  date: Date;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  moduleId?: string;
  type?: string;
}

export type SessionsMentoringsCreationAttributes = Optional<SessionsMentoringsAttributes, 'id' | 'session' | 'deletedAt' | 'moduleId' | 'type'>;

export class SessionsMentorings extends Model<SessionsMentoringsAttributes, SessionsMentoringsCreationAttributes> implements SessionsMentoringsAttributes {
  declare pk: number;
  declare id?: string;
  declare subjectId: string;
  declare sessionId: string;
  declare teacherId: string;
  declare session?: number;
  declare title: string;
  declare content: string;
  declare duration: string;
  declare location: string;
  declare date: Date;
  declare link: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare moduleId?: string;
  declare type?: string;

  public static initModel(sequelize: Sequelize): typeof SessionsMentorings {
    SessionsMentorings.init(
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
        teacherId: { type: DataTypes.UUID, allowNull: false,
            field: 'teacher_id'
        },
        session: { type: DataTypes.INTEGER, allowNull: true,
            field: 'session'
        },
        title: { type: DataTypes.TEXT, allowNull: false,
            field: 'title'
        },
        content: { type: DataTypes.TEXT, allowNull: false,
            field: 'content'
        },
        duration: { type: DataTypes.STRING, allowNull: false,
            field: 'duration'
        },
        location: { type: DataTypes.STRING, allowNull: false,
            field: 'location'
        },
        date: { type: DataTypes.DATE, allowNull: false,
            field: 'date'
        },
        link: { type: DataTypes.STRING, allowNull: false,
            field: 'link'
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
        moduleId: { type: DataTypes.UUID, allowNull: true,
            field: 'module_id'
        },
        type: { type: DataTypes.STRING, allowNull: true,
            field: 'type'
        }
      },
      {
        sequelize,
        tableName: 'sessions_mentorings',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsMentorings;
  }
}
