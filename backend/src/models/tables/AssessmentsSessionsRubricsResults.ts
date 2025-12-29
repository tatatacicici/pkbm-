import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsRubricsResultsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessmentSessionId: number;
  studentId: string;
  rubricId: number;
  competencyId: string;
  scoreId: string;
  note?: string;
  result: number;
  scoredBy: string;
  scoredAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsSessionsRubricsResultsCreationAttributes = Optional<AssessmentsSessionsRubricsResultsAttributes, 'id' | 'note' | 'deletedAt'>;

export class AssessmentsSessionsRubricsResults extends Model<AssessmentsSessionsRubricsResultsAttributes, AssessmentsSessionsRubricsResultsCreationAttributes> implements AssessmentsSessionsRubricsResultsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare assessmentSessionId: number;
  declare studentId: string;
  declare rubricId: number;
  declare competencyId: string;
  declare scoreId: string;
  declare note?: string;
  declare result: number;
  declare scoredBy: string;
  declare scoredAt: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessionsRubricsResults {
    AssessmentsSessionsRubricsResults.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assessmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_id'
        },
        assessmentSessionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_session_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
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
        note: { type: DataTypes.TEXT, allowNull: true,
            field: 'note'
        },
        result: { type: DataTypes.INTEGER, allowNull: false,
            field: 'result'
        },
        scoredBy: { type: DataTypes.UUID, allowNull: false,
            field: 'scored_by'
        },
        scoredAt: { type: DataTypes.DATE, allowNull: false,
            field: 'scored_at'
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
        tableName: 'assessments_sessions_rubrics_results',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSessionsRubricsResults;
  }
}
