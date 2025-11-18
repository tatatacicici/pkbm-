import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentProfilesAttributes {
  userId: string;
  nationalStudentNumber?: string;
  currentGpa?: number;
  graduationDate?: Date;
  diplomaNumber?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type StudentProfilesCreationAttributes = Optional<StudentProfilesAttributes, 'nationalStudentNumber' | 'currentGpa' | 'graduationDate' | 'diplomaNumber' | 'deletedAt' | 'createdAt' | 'updatedAt'>;

export class StudentProfiles extends Model<StudentProfilesAttributes, StudentProfilesCreationAttributes> implements StudentProfilesAttributes {
  declare userId: string;
  declare nationalStudentNumber?: string;
  declare currentGpa?: number;
  declare graduationDate?: Date;
  declare diplomaNumber?: string;
  declare deletedAt?: Date;
  declare createdAt?: Date;
  declare updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentProfiles {
    StudentProfiles.init(
      {
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        nationalStudentNumber: { type: DataTypes.STRING, allowNull: true,
            field: 'national_student_number'
        },
        currentGpa: { type: DataTypes.DECIMAL, allowNull: true,
            field: 'current_gpa'
        },
        graduationDate: { type: DataTypes.DATE, allowNull: true,
            field: 'graduation_date'
        },
        diplomaNumber: { type: DataTypes.STRING, allowNull: true,
            field: 'diploma_number'
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
        tableName: 'student_profiles',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentProfiles;
  }
}
