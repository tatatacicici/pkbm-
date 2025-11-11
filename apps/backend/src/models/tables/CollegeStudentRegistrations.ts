import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeStudentRegistrationsAttributes {
  id?: string;
  student_id: string;
  college_program_offering_id: string;
  created_at?: Date;
  updated_at?: Date;
}

export type CollegeStudentRegistrationsCreationAttributes = Optional<CollegeStudentRegistrationsAttributes, 'id' | 'created_at' | 'updated_at'>;

export class CollegeStudentRegistrations extends Model<CollegeStudentRegistrationsAttributes, CollegeStudentRegistrationsCreationAttributes> implements CollegeStudentRegistrationsAttributes {
  declare id?: string;
  declare student_id: string;
  declare college_program_offering_id: string;
  declare created_at?: Date;
  declare updated_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeStudentRegistrations {
    CollegeStudentRegistrations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        college_program_offering_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'college_student_registrations',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeStudentRegistrations;
  }
}
