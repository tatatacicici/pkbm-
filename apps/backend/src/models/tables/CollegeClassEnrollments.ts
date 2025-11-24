import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeClassEnrollmentsAttributes {
  id?: string;
  studentId: string;
  classId: string;
  gradePoint?: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CollegeClassEnrollmentsCreationAttributes = Optional<CollegeClassEnrollmentsAttributes, 'id' | 'gradePoint' | 'deletedAt' | 'createdAt' | 'updatedAt'>;

export class CollegeClassEnrollments extends Model<CollegeClassEnrollmentsAttributes, CollegeClassEnrollmentsCreationAttributes> implements CollegeClassEnrollmentsAttributes {
  declare id?: string;
  declare studentId: string;
  declare classId: string;
  declare gradePoint?: number;
  declare deletedAt?: Date;
  declare createdAt?: Date;
  declare updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeClassEnrollments {
    CollegeClassEnrollments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        classId: { type: DataTypes.UUID, allowNull: false,
            field: 'class_id'
        },
        gradePoint: { type: DataTypes.DECIMAL, allowNull: true,
            field: 'grade_point'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        }
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
