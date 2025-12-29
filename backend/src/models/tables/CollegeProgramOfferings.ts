import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeProgramOfferingsAttributes {
  id?: string;
  collegeAcademicCohortId: string;
  majorId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  startDate: Date;
  endDate: Date;
}

export type CollegeProgramOfferingsCreationAttributes = Optional<CollegeProgramOfferingsAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class CollegeProgramOfferings extends Model<CollegeProgramOfferingsAttributes, CollegeProgramOfferingsCreationAttributes> implements CollegeProgramOfferingsAttributes {
  declare id?: string;
  declare collegeAcademicCohortId: string;
  declare majorId: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;
  declare startDate: Date;
  declare endDate: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeProgramOfferings {
    CollegeProgramOfferings.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        collegeAcademicCohortId: { type: DataTypes.UUID, allowNull: false,
            field: 'college_academic_cohort_id'
        },
        majorId: { type: DataTypes.UUID, allowNull: false,
            field: 'major_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        startDate: { type: DataTypes.DATE, allowNull: false,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: false,
            field: 'end_date'
        }
      },
      {
        sequelize,
        tableName: 'college_program_offerings',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeProgramOfferings;
  }
}
