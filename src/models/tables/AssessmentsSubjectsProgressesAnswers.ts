import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAnswersAttributes {
  pk?: any;
  id?: any;
  subject_progress_id?: any;
  student_id?: any;
  subject_id?: any;
  rubric_id?: any;
  competency_id?: any;
  score_id?: any;
  score?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsSubjectsProgressesAnswersCreationAttributes = Optional<AssessmentsSubjectsProgressesAnswersAttributes, 'id'>;

export class AssessmentsSubjectsProgressesAnswers extends Model<AssessmentsSubjectsProgressesAnswersAttributes, AssessmentsSubjectsProgressesAnswersCreationAttributes> implements AssessmentsSubjectsProgressesAnswersAttributes {
  declare pk?: any;
  declare id?: any;
  declare subject_progress_id?: any;
  declare student_id?: any;
  declare subject_id?: any;
  declare rubric_id?: any;
  declare competency_id?: any;
  declare score_id?: any;
  declare score?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
