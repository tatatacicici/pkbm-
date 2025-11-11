import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeAcademicCohortsAttributes {
  id?: any;
  name?: any;
  academic_year?: any;
  start_date?: any;
  end_date?: any;
  deleted_at?: any;
  created_at?: any;
  updated_at?: any;
  code?: any;
}

export type CollegeAcademicCohortsCreationAttributes = Optional<CollegeAcademicCohortsAttributes, 'id'>;

export class CollegeAcademicCohorts extends Model<CollegeAcademicCohortsAttributes, CollegeAcademicCohortsCreationAttributes> implements CollegeAcademicCohortsAttributes {
  declare id?: any;
  declare name?: any;
  declare academic_year?: any;
  declare start_date?: any;
  declare end_date?: any;
  declare deleted_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare code?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeAcademicCohorts {
    CollegeAcademicCohorts.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.TEXT, allowNull: false },
        academic_year: { type: DataTypes.TEXT, allowNull: false },
        start_date: { type: DataTypes.DATE, allowNull: false },
        end_date: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        code: { type: DataTypes.TEXT, allowNull: true }
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
