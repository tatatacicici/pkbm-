import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectSessionsAttributes {
  id?: string;
  subjectId: string;
  title: string;
  description?: string;
  sessionNumber: number;
  durationMinutes?: number;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type SubjectSessionsCreationAttributes = Optional<SubjectSessionsAttributes, 'id' | 'description' | 'durationMinutes' | 'publishedAt' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class SubjectSessions extends Model<SubjectSessionsAttributes, SubjectSessionsCreationAttributes> implements SubjectSessionsAttributes {
  declare id?: string;
  declare subjectId: string;
  declare title: string;
  declare description?: string;
  declare sessionNumber: number;
  declare durationMinutes?: number;
  declare publishedAt?: Date;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectSessions {
    SubjectSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        sessionNumber: { type: DataTypes.INTEGER, allowNull: false,
            field: 'session_number'
        },
        durationMinutes: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_minutes'
        },
        publishedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'published_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'subject_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectSessions;
  }
}
