import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAttributes {
  pk: number;
  id?: string;
  subject_id: string;
  student_id: string;
  rubric_id: number;
  type: string;
  status: string;
  final_score?: number;
  started_at: Date;
  completed_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsSubjectsProgressesCreationAttributes = Optional<AssessmentsSubjectsProgressesAttributes, 'id' | 'final_score' | 'completed_at' | 'deleted_at'>;

export class AssessmentsSubjectsProgresses extends Model<AssessmentsSubjectsProgressesAttributes, AssessmentsSubjectsProgressesCreationAttributes> implements AssessmentsSubjectsProgressesAttributes {
  declare pk: number;
  declare id?: string;
  declare subject_id: string;
  declare student_id: string;
  declare rubric_id: number;
  declare type: string;
  declare status: string;
  declare final_score?: number;
  declare started_at: Date;
  declare completed_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSubjectsProgresses {
    AssessmentsSubjectsProgresses.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        rubric_id: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        final_score: { type: DataTypes.INTEGER, allowNull: true },
        started_at: { type: DataTypes.DATE, allowNull: false },
        completed_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
