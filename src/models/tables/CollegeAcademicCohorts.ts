import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeAcademicCohortsAttributes {
  id?: string;
  name: string;
  academic_year: string;
  start_date: Date;
  end_date: Date;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  code?: string;
}

export type CollegeAcademicCohortsCreationAttributes = Optional<CollegeAcademicCohortsAttributes, 'id' | 'deleted_at' | 'created_at' | 'updated_at' | 'code'>;

export class CollegeAcademicCohorts extends Model<CollegeAcademicCohortsAttributes, CollegeAcademicCohortsCreationAttributes> implements CollegeAcademicCohortsAttributes {
  declare id?: string;
  declare name: string;
  declare academic_year: string;
  declare start_date: Date;
  declare end_date: Date;
  declare deleted_at?: Date;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare code?: string;

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
