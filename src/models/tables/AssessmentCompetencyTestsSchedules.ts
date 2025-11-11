import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsSchedulesAttributes {
  pk: number;
  id?: string;
  program_id: string;
  provider: string;
  date: Date;
  via?: string;
  link?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  user_id: string;
}

export type AssessmentCompetencyTestsSchedulesCreationAttributes = Optional<AssessmentCompetencyTestsSchedulesAttributes, 'id' | 'via' | 'link' | 'deleted_at'>;

export class AssessmentCompetencyTestsSchedules extends Model<AssessmentCompetencyTestsSchedulesAttributes, AssessmentCompetencyTestsSchedulesCreationAttributes> implements AssessmentCompetencyTestsSchedulesAttributes {
  declare pk: number;
  declare id?: string;
  declare program_id: string;
  declare provider: string;
  declare date: Date;
  declare via?: string;
  declare link?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare user_id: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentCompetencyTestsSchedules {
    AssessmentCompetencyTestsSchedules.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        program_id: { type: DataTypes.UUID, allowNull: false },
        provider: { type: DataTypes.TEXT, allowNull: false },
        date: { type: DataTypes.DATEONLY, allowNull: false },
        via: { type: DataTypes.TEXT, allowNull: true },
        link: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false }
      },
      {
        sequelize,
        tableName: 'assessment_competency_tests_schedules',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentCompetencyTestsSchedules;
  }
}
