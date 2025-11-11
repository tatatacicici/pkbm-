import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSubjectsAttributes {
  id?: string;
  student_id: string;
  subject_id: string;
  semester_id?: string;
  date_taken?: Date;
  date_finished?: Date;
  status: string;
  final_score?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type StudentSubjectsCreationAttributes = Optional<StudentSubjectsAttributes, 'id' | 'semester_id' | 'date_taken' | 'date_finished' | 'final_score' | 'deleted_at'>;

export class StudentSubjects extends Model<StudentSubjectsAttributes, StudentSubjectsCreationAttributes> implements StudentSubjectsAttributes {
  declare id?: string;
  declare student_id: string;
  declare subject_id: string;
  declare semester_id?: string;
  declare date_taken?: Date;
  declare date_finished?: Date;
  declare status: string;
  declare final_score?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
