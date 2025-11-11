import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentMajorsAttributes {
  id?: string;
  student_id: string;
  major_id: string;
  semester_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  generation?: string;
}

export type StudentMajorsCreationAttributes = Optional<StudentMajorsAttributes, 'id' | 'deleted_at' | 'generation'>;

export class StudentMajors extends Model<StudentMajorsAttributes, StudentMajorsCreationAttributes> implements StudentMajorsAttributes {
  declare id?: string;
  declare student_id: string;
  declare major_id: string;
  declare semester_id: string;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare generation?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentMajors {
    StudentMajors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        major_id: { type: DataTypes.UUID, allowNull: false },
        semester_id: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        generation: { type: DataTypes.STRING, allowNull: true }
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
