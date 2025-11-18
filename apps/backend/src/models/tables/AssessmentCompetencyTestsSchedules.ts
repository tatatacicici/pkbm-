import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsSchedulesAttributes {
  pk: number;
  id?: string;
  programId: string;
  provider: string;
  date: Date;
  via?: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  userId: string;
}

export type AssessmentCompetencyTestsSchedulesCreationAttributes = Optional<AssessmentCompetencyTestsSchedulesAttributes, 'id' | 'via' | 'link' | 'deletedAt'>;

export class AssessmentCompetencyTestsSchedules extends Model<AssessmentCompetencyTestsSchedulesAttributes, AssessmentCompetencyTestsSchedulesCreationAttributes> implements AssessmentCompetencyTestsSchedulesAttributes {
  declare pk: number;
  declare id?: string;
  declare programId: string;
  declare provider: string;
  declare date: Date;
  declare via?: string;
  declare link?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare userId: string;

  public static initModel(sequelize: Sequelize): typeof AssessmentCompetencyTestsSchedules {
    AssessmentCompetencyTestsSchedules.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        programId: { type: DataTypes.UUID, allowNull: false,
            field: 'program_id'
        },
        provider: { type: DataTypes.TEXT, allowNull: false,
            field: 'provider'
        },
        date: { type: DataTypes.DATEONLY, allowNull: false,
            field: 'date'
        },
        via: { type: DataTypes.TEXT, allowNull: true,
            field: 'via'
        },
        link: { type: DataTypes.TEXT, allowNull: true,
            field: 'link'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        }
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
