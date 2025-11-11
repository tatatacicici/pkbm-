import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsSchedulesAttributes {
  pk?: any;
  id?: any;
  program_id?: any;
  provider?: any;
  date?: any;
  via?: any;
  link?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  user_id?: any;
}

export type AssessmentCompetencyTestsSchedulesCreationAttributes = Optional<AssessmentCompetencyTestsSchedulesAttributes, 'id'>;

export class AssessmentCompetencyTestsSchedules extends Model<AssessmentCompetencyTestsSchedulesAttributes, AssessmentCompetencyTestsSchedulesCreationAttributes> implements AssessmentCompetencyTestsSchedulesAttributes {
  declare pk?: any;
  declare id?: any;
  declare program_id?: any;
  declare provider?: any;
  declare date?: any;
  declare via?: any;
  declare link?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare user_id?: any;

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
