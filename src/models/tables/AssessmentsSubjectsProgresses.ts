import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSubjectsProgressesAttributes {
  pk?: any;
  id?: any;
  subject_id?: any;
  student_id?: any;
  rubric_id?: any;
  type?: any;
  status?: any;
  final_score?: any;
  started_at?: any;
  completed_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsSubjectsProgressesCreationAttributes = Optional<AssessmentsSubjectsProgressesAttributes, 'id'>;

export class AssessmentsSubjectsProgresses extends Model<AssessmentsSubjectsProgressesAttributes, AssessmentsSubjectsProgressesCreationAttributes> implements AssessmentsSubjectsProgressesAttributes {
  declare pk?: any;
  declare id?: any;
  declare subject_id?: any;
  declare student_id?: any;
  declare rubric_id?: any;
  declare type?: any;
  declare status?: any;
  declare final_score?: any;
  declare started_at?: any;
  declare completed_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
