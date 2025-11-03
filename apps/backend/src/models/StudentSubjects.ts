import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface StudentSubjectsAttributes {
  id: string;
  studentId: string;
  subjectId: string;
  semesterId?: string;
  dateTaken?: Date;
  dateFinished?: Date;
  status: string;
  finalScore?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type StudentSubjectsPk = "id";
export type StudentSubjectsId = StudentSubjects[StudentSubjectsPk];
export type StudentSubjectsOptionalAttributes = "semesterId" | "dateTaken" | "dateFinished" | "finalScore" | "deletedAt";
export type StudentSubjectsCreationAttributes = Optional<StudentSubjectsAttributes, StudentSubjectsOptionalAttributes>;

export class StudentSubjects extends Model<StudentSubjectsAttributes, StudentSubjectsCreationAttributes> implements StudentSubjectsAttributes {
  id!: string;
  studentId!: string;
  subjectId!: string;
  semesterId?: string;
  dateTaken?: Date;
  dateFinished?: Date;
  status!: string;
  finalScore?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof StudentSubjects {
    return StudentSubjects.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    semesterId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'semester_id'
    },
    dateTaken: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_taken'
    },
    dateFinished: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'date_finished'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    finalScore: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'final_score'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'student_subjects',
    schema: 'public',
    timestamps: false
  });
  }
}
