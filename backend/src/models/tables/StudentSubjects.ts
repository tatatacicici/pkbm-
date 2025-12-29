import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface StudentSubjectsAttributes {
  id?: string;
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

export type StudentSubjectsCreationAttributes = Optional<StudentSubjectsAttributes, 'id' | 'semesterId' | 'dateTaken' | 'dateFinished' | 'finalScore' | 'deletedAt'>;

export class StudentSubjects extends Model<StudentSubjectsAttributes, StudentSubjectsCreationAttributes> implements StudentSubjectsAttributes {
  declare id?: string;
  declare studentId: string;
  declare subjectId: string;
  declare semesterId?: string;
  declare dateTaken?: Date;
  declare dateFinished?: Date;
  declare status: string;
  declare finalScore?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof StudentSubjects {
    StudentSubjects.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        semesterId: { type: DataTypes.UUID, allowNull: true,
            field: 'semester_id'
        },
        dateTaken: { type: DataTypes.DATE, allowNull: true,
            field: 'date_taken'
        },
        dateFinished: { type: DataTypes.DATE, allowNull: true,
            field: 'date_finished'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        finalScore: { type: DataTypes.DOUBLE, allowNull: true,
            field: 'final_score'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
