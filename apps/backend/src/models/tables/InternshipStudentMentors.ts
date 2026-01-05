import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface InternshipStudentMentorsAttributes {
  id?: string;
  studentId: string;
  mentorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type InternshipStudentMentorsCreationAttributes = Optional<InternshipStudentMentorsAttributes, 'id' | 'deletedAt'>;

export class InternshipStudentMentors extends Model<InternshipStudentMentorsAttributes, InternshipStudentMentorsCreationAttributes> implements InternshipStudentMentorsAttributes {
  declare id?: string;
  declare studentId: string;
  declare mentorId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof InternshipStudentMentors {
    InternshipStudentMentors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        mentorId: { type: DataTypes.UUID, allowNull: false,
            field: 'mentor_id'
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
        tableName: 'internship_student_mentors',
        timestamps: true,
        underscored: true,
      }
    );
    return InternshipStudentMentors;
  }
}
