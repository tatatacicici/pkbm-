import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAttributes {
  pk: number;
  id?: string;
  subjectId: string;
  studentId: string;
  rubricId: number;
  type: string;
  status: string;
  finalScore?: number;
  startedAt: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSubjectsProgressesCreationAttributes = Optional<AssessmentsSubjectsProgressesAttributes, 'id' | 'finalScore' | 'completedAt' | 'deletedAt'>;

export class AssessmentsSubjectsProgresses extends Model<AssessmentsSubjectsProgressesAttributes, AssessmentsSubjectsProgressesCreationAttributes> implements AssessmentsSubjectsProgressesAttributes {
  declare pk: number;
  declare id?: string;
  declare subjectId: string;
  declare studentId: string;
  declare rubricId: number;
  declare type: string;
  declare status: string;
  declare finalScore?: number;
  declare startedAt: Date;
  declare completedAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSubjectsProgresses {
    AssessmentsSubjectsProgresses.init(
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
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        rubricId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'rubric_id'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        finalScore: { type: DataTypes.INTEGER, allowNull: true,
            field: 'final_score'
        },
        startedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'started_at'
        },
        completedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'completed_at'
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
        tableName: 'assessments_subjects_progresses',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSubjectsProgresses;
  }
}
