import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeClassesAttributes {
  id?: string;
  subjectId: string;
  collegeAcademicCohortId: string;
  lecturerId?: string;
  majorId?: string;
  classCode: string;
  packageSemester?: number;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CollegeClassesCreationAttributes = Optional<CollegeClassesAttributes, 'id' | 'lecturerId' | 'majorId' | 'packageSemester' | 'deletedAt' | 'createdAt' | 'updatedAt'>;

export class CollegeClasses extends Model<CollegeClassesAttributes, CollegeClassesCreationAttributes> implements CollegeClassesAttributes {
  declare id?: string;
  declare subjectId: string;
  declare collegeAcademicCohortId: string;
  declare lecturerId?: string;
  declare majorId?: string;
  declare classCode: string;
  declare packageSemester?: number;
  declare deletedAt?: Date;
  declare createdAt?: Date;
  declare updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeClasses {
    CollegeClasses.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        collegeAcademicCohortId: { type: DataTypes.UUID, allowNull: false,
            field: 'college_academic_cohort_id'
        },
        lecturerId: { type: DataTypes.UUID, allowNull: true,
            field: 'lecturer_id'
        },
        majorId: { type: DataTypes.UUID, allowNull: true,
            field: 'major_id'
        },
        classCode: { type: DataTypes.STRING, allowNull: false,
            field: 'class_code'
        },
        packageSemester: { type: DataTypes.INTEGER, allowNull: true,
            field: 'package_semester'
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
        tableName: 'college_classes',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeClasses;
  }
}
