import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeClassesAttributes {
  id?: string;
  subject_id: string;
  college_academic_cohort_id: string;
  lecturer_id?: string;
  major_id?: string;
  class_code: string;
  package_semester?: number;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type CollegeClassesCreationAttributes = Optional<CollegeClassesAttributes, 'id' | 'lecturer_id' | 'major_id' | 'package_semester' | 'deleted_at' | 'created_at' | 'updated_at'>;

export class CollegeClasses extends Model<CollegeClassesAttributes, CollegeClassesCreationAttributes> implements CollegeClassesAttributes {
  declare id?: string;
  declare subject_id: string;
  declare college_academic_cohort_id: string;
  declare lecturer_id?: string;
  declare major_id?: string;
  declare class_code: string;
  declare package_semester?: number;
  declare deleted_at?: Date;
  declare created_at?: Date;
  declare updated_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeClasses {
    CollegeClasses.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        college_academic_cohort_id: { type: DataTypes.UUID, allowNull: false },
        lecturer_id: { type: DataTypes.UUID, allowNull: true },
        major_id: { type: DataTypes.UUID, allowNull: true },
        class_code: { type: DataTypes.STRING, allowNull: false },
        package_semester: { type: DataTypes.INTEGER, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'college_classes',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeClasses;
  }
}
