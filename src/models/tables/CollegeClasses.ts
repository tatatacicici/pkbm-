import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeClassesAttributes {
  id?: any;
  subject_id?: any;
  college_academic_cohort_id?: any;
  lecturer_id?: any;
  major_id?: any;
  class_code?: any;
  package_semester?: any;
  deleted_at?: any;
  created_at?: any;
  updated_at?: any;
}

export type CollegeClassesCreationAttributes = Optional<CollegeClassesAttributes, 'id'>;

export class CollegeClasses extends Model<CollegeClassesAttributes, CollegeClassesCreationAttributes> implements CollegeClassesAttributes {
  declare id?: any;
  declare subject_id?: any;
  declare college_academic_cohort_id?: any;
  declare lecturer_id?: any;
  declare major_id?: any;
  declare class_code?: any;
  declare package_semester?: any;
  declare deleted_at?: any;
  declare created_at?: any;
  declare updated_at?: any;

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
