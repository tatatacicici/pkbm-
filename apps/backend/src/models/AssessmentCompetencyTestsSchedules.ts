import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsSchedulesAttributes {
  pk: number;
  id?: string;
  programId: string;
  provider: string;
  date: string;
  time: string;
  via?: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  userId: string;
}

export type AssessmentCompetencyTestsSchedulesPk = "pk";
export type AssessmentCompetencyTestsSchedulesId = AssessmentCompetencyTestsSchedules[AssessmentCompetencyTestsSchedulesPk];
export type AssessmentCompetencyTestsSchedulesOptionalAttributes = "pk" | "id" | "via" | "link" | "deletedAt";
export type AssessmentCompetencyTestsSchedulesCreationAttributes = Optional<AssessmentCompetencyTestsSchedulesAttributes, AssessmentCompetencyTestsSchedulesOptionalAttributes>;

export class AssessmentCompetencyTestsSchedules extends Model<AssessmentCompetencyTestsSchedulesAttributes, AssessmentCompetencyTestsSchedulesCreationAttributes> implements AssessmentCompetencyTestsSchedulesAttributes {
  pk!: number;
  id?: string;
  programId!: string;
  provider!: string;
  date!: string;
  time!: string;
  via?: string;
  link?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  userId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentCompetencyTestsSchedules {
    return AssessmentCompetencyTestsSchedules.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    programId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'program_id'
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    via: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    }
  }, {
    sequelize,
    tableName: 'assessment_competency_tests_schedules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessment_competency_tests_schedules_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
