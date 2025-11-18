import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeStudentRegistrationsAttributes {
  id?: string;
  studentId: string;
  collegeProgramOfferingId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CollegeStudentRegistrationsCreationAttributes = Optional<CollegeStudentRegistrationsAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export class CollegeStudentRegistrations extends Model<CollegeStudentRegistrationsAttributes, CollegeStudentRegistrationsCreationAttributes> implements CollegeStudentRegistrationsAttributes {
  declare id?: string;
  declare studentId: string;
  declare collegeProgramOfferingId: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeStudentRegistrations {
    CollegeStudentRegistrations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        collegeProgramOfferingId: { type: DataTypes.UUID, allowNull: false,
            field: 'college_program_offering_id'
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
        tableName: 'college_student_registrations',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeStudentRegistrations;
  }
}
