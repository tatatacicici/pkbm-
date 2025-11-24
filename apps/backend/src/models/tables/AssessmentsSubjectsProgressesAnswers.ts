import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAnswersAttributes {
  pk: number;
  id?: string;
  subjectProgressId: number;
  studentId: string;
  subjectId: string;
  rubricId: number;
  competencyId: string;
  scoreId: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSubjectsProgressesAnswersCreationAttributes = Optional<AssessmentsSubjectsProgressesAnswersAttributes, 'id' | 'deletedAt'>;

export class AssessmentsSubjectsProgressesAnswers extends Model<AssessmentsSubjectsProgressesAnswersAttributes, AssessmentsSubjectsProgressesAnswersCreationAttributes> implements AssessmentsSubjectsProgressesAnswersAttributes {
  declare pk: number;
  declare id?: string;
  declare subjectProgressId: number;
  declare studentId: string;
  declare subjectId: string;
  declare rubricId: number;
  declare competencyId: string;
  declare scoreId: string;
  declare score: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSubjectsProgressesAnswers {
    AssessmentsSubjectsProgressesAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        subjectProgressId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'subject_progress_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        rubricId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'rubric_id'
        },
        competencyId: { type: DataTypes.STRING, allowNull: false,
            field: 'competency_id'
        },
        scoreId: { type: DataTypes.STRING, allowNull: false,
            field: 'score_id'
        },
        score: { type: DataTypes.DOUBLE, allowNull: false,
            field: 'score'
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
        tableName: 'assessments_subjects_progresses_answers',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSubjectsProgressesAnswers;
  }
}
