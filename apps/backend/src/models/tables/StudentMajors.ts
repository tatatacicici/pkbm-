import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentMajorsAttributes {
  id?: string;
  studentId: string;
  majorId: string;
  semesterId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  generation?: string;
}

export type StudentMajorsCreationAttributes = Optional<StudentMajorsAttributes, 'id' | 'deletedAt' | 'generation'>;

export class StudentMajors extends Model<StudentMajorsAttributes, StudentMajorsCreationAttributes> implements StudentMajorsAttributes {
  declare id?: string;
  declare studentId: string;
  declare majorId: string;
  declare semesterId: string;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare generation?: string;

  public static initModel(sequelize: Sequelize): typeof StudentMajors {
    StudentMajors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        majorId: { type: DataTypes.UUID, allowNull: false,
            field: 'major_id'
        },
        semesterId: { type: DataTypes.UUID, allowNull: false,
            field: 'semester_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        generation: { type: DataTypes.STRING, allowNull: true,
            field: 'generation'
        }
      },
      {
        sequelize,
        tableName: 'student_majors',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentMajors;
  }
}
