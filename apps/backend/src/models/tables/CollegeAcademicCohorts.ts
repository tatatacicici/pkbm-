import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeAcademicCohortsAttributes {
  id?: string;
  name: string;
  academicYear: string;
  startDate: Date;
  endDate: Date;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  code?: string;
}

export type CollegeAcademicCohortsCreationAttributes = Optional<CollegeAcademicCohortsAttributes, 'id' | 'deletedAt' | 'createdAt' | 'updatedAt' | 'code'>;

export class CollegeAcademicCohorts extends Model<CollegeAcademicCohortsAttributes, CollegeAcademicCohortsCreationAttributes> implements CollegeAcademicCohortsAttributes {
  declare id?: string;
  declare name: string;
  declare academicYear: string;
  declare startDate: Date;
  declare endDate: Date;
  declare deletedAt?: Date;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare code?: string;

  public static initModel(sequelize: Sequelize): typeof CollegeAcademicCohorts {
    CollegeAcademicCohorts.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.TEXT, allowNull: false,
            field: 'name'
        },
        academicYear: { type: DataTypes.TEXT, allowNull: false,
            field: 'academic_year'
        },
        startDate: { type: DataTypes.DATE, allowNull: false,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: false,
            field: 'end_date'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        code: { type: DataTypes.TEXT, allowNull: true,
            field: 'code'
        }
      },
      {
        sequelize,
        tableName: 'college_academic_cohorts',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeAcademicCohorts;
  }
}
