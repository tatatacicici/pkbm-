import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeClassEnrollmentsAttributes {
  id?: any;
  student_id?: any;
  class_id?: any;
  grade_point?: any;
  deleted_at?: any;
  created_at?: any;
  updated_at?: any;
}

export type CollegeClassEnrollmentsCreationAttributes = Optional<CollegeClassEnrollmentsAttributes, 'id'>;

export class CollegeClassEnrollments extends Model<CollegeClassEnrollmentsAttributes, CollegeClassEnrollmentsCreationAttributes> implements CollegeClassEnrollmentsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare class_id?: any;
  declare grade_point?: any;
  declare deleted_at?: any;
  declare created_at?: any;
  declare updated_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeClassEnrollments {
    CollegeClassEnrollments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        class_id: { type: DataTypes.UUID, allowNull: false },
        grade_point: { type: DataTypes.DECIMAL, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'college_class_enrollments',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeClassEnrollments;
  }
}
