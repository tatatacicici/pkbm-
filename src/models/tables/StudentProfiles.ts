import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentProfilesAttributes {
  user_id?: any;
  national_student_number?: any;
  current_gpa?: any;
  graduation_date?: any;
  diploma_number?: any;
  deleted_at?: any;
  created_at?: any;
  updated_at?: any;
}

export type StudentProfilesCreationAttributes = Optional<StudentProfilesAttributes, 'id'>;

export class StudentProfiles extends Model<StudentProfilesAttributes, StudentProfilesCreationAttributes> implements StudentProfilesAttributes {
  declare user_id?: any;
  declare national_student_number?: any;
  declare current_gpa?: any;
  declare graduation_date?: any;
  declare diploma_number?: any;
  declare deleted_at?: any;
  declare created_at?: any;
  declare updated_at?: any;

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
