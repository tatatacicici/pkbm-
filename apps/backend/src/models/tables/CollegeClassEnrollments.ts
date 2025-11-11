import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeClassEnrollmentsAttributes {
  id?: string;
  student_id: string;
  class_id: string;
  grade_point?: number;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type CollegeClassEnrollmentsCreationAttributes = Optional<CollegeClassEnrollmentsAttributes, 'id' | 'grade_point' | 'deleted_at' | 'created_at' | 'updated_at'>;

export class CollegeClassEnrollments extends Model<CollegeClassEnrollmentsAttributes, CollegeClassEnrollmentsCreationAttributes> implements CollegeClassEnrollmentsAttributes {
  declare id?: string;
  declare student_id: string;
  declare class_id: string;
  declare grade_point?: number;
  declare deleted_at?: Date;
  declare created_at?: Date;
  declare updated_at?: Date;

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
