import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeStudentRegistrationsAttributes {
  id?: any;
  student_id?: any;
  college_program_offering_id?: any;
  created_at?: any;
  updated_at?: any;
}

export type CollegeStudentRegistrationsCreationAttributes = Optional<CollegeStudentRegistrationsAttributes, 'id'>;

export class CollegeStudentRegistrations extends Model<CollegeStudentRegistrationsAttributes, CollegeStudentRegistrationsCreationAttributes> implements CollegeStudentRegistrationsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare college_program_offering_id?: any;
  declare created_at?: any;
  declare updated_at?: any;

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
