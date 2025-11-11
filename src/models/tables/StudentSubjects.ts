import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSubjectsAttributes {
  id?: any;
  student_id?: any;
  subject_id?: any;
  semester_id?: any;
  date_taken?: any;
  date_finished?: any;
  status?: any;
  final_score?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type StudentSubjectsCreationAttributes = Optional<StudentSubjectsAttributes, 'id'>;

export class StudentSubjects extends Model<StudentSubjectsAttributes, StudentSubjectsCreationAttributes> implements StudentSubjectsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare subject_id?: any;
  declare semester_id?: any;
  declare date_taken?: any;
  declare date_finished?: any;
  declare status?: any;
  declare final_score?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentSubjects {
    StudentSubjects.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        semester_id: { type: DataTypes.UUID, allowNull: true },
        date_taken: { type: DataTypes.DATE, allowNull: true },
        date_finished: { type: DataTypes.DATE, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: false },
        final_score: { type: DataTypes.DOUBLE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'student_subjects',
        timestamps: true,
        underscored: true,
      }
    );
    return StudentSubjects;
  }
}
