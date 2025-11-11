import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAnswersAttributes {
  pk: number;
  id?: string;
  subject_progress_id: number;
  student_id: string;
  subject_id: string;
  rubric_id: number;
  competency_id: string;
  score_id: string;
  score: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsSubjectsProgressesAnswersCreationAttributes = Optional<AssessmentsSubjectsProgressesAnswersAttributes, 'id' | 'deleted_at'>;

export class AssessmentsSubjectsProgressesAnswers extends Model<AssessmentsSubjectsProgressesAnswersAttributes, AssessmentsSubjectsProgressesAnswersCreationAttributes> implements AssessmentsSubjectsProgressesAnswersAttributes {
  declare pk: number;
  declare id?: string;
  declare subject_progress_id: number;
  declare student_id: string;
  declare subject_id: string;
  declare rubric_id: number;
  declare competency_id: string;
  declare score_id: string;
  declare score: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSubjectsProgressesAnswers {
    AssessmentsSubjectsProgressesAnswers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_progress_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        rubric_id: { type: DataTypes.INTEGER, allowNull: false },
        competency_id: { type: DataTypes.STRING, allowNull: false },
        score_id: { type: DataTypes.STRING, allowNull: false },
        score: { type: DataTypes.DOUBLE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
