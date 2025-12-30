import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsAssessmentsAttributes {
  id?: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  subjectId: string;
  sessionId: string;
}

export type SubjectsSessionsAssessmentsCreationAttributes = Optional<SubjectsSessionsAssessmentsAttributes, 'id' | 'deletedAt'>;

export class SubjectsSessionsAssessments extends Model<SubjectsSessionsAssessmentsAttributes, SubjectsSessionsAssessmentsCreationAttributes> implements SubjectsSessionsAssessmentsAttributes {
  declare id?: string;
  declare title: string;
  declare description: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare subjectId: string;
  declare sessionId: string;

  public static initModel(sequelize: Sequelize): typeof SubjectsSessionsAssessments {
    SubjectsSessionsAssessments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
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
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        }
      },
      {
        sequelize,
        tableName: 'subjects_sessions_assessments',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectsSessionsAssessments;
  }
}
