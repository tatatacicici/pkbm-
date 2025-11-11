import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentProfilesAttributes {
  user_id: string;
  national_student_number?: string;
  current_gpa?: number;
  graduation_date?: Date;
  diploma_number?: string;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type StudentProfilesCreationAttributes = Optional<StudentProfilesAttributes, 'id' | 'national_student_number' | 'current_gpa' | 'graduation_date' | 'diploma_number' | 'deleted_at' | 'created_at' | 'updated_at'>;

export class StudentProfiles extends Model<StudentProfilesAttributes, StudentProfilesCreationAttributes> implements StudentProfilesAttributes {
  declare user_id: string;
  declare national_student_number?: string;
  declare current_gpa?: number;
  declare graduation_date?: Date;
  declare diploma_number?: string;
  declare deleted_at?: Date;
  declare created_at?: Date;
  declare updated_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentProfiles {
    StudentProfiles.init(
      {
        user_id: { type: DataTypes.UUID, allowNull: false },
        national_student_number: { type: DataTypes.STRING, allowNull: true },
        current_gpa: { type: DataTypes.DECIMAL, allowNull: true },
        graduation_date: { type: DataTypes.DATE, allowNull: true },
        diploma_number: { type: DataTypes.STRING, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
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
