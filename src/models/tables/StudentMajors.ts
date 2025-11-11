import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentMajorsAttributes {
  id?: any;
  student_id?: any;
  major_id?: any;
  semester_id?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  generation?: any;
}

export type StudentMajorsCreationAttributes = Optional<StudentMajorsAttributes, 'id'>;

export class StudentMajors extends Model<StudentMajorsAttributes, StudentMajorsCreationAttributes> implements StudentMajorsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare major_id?: any;
  declare semester_id?: any;
  declare status?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare generation?: any;

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
