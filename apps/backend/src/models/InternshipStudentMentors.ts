import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface InternshipStudentMentorsAttributes {
  id: string;
  studentId: string;
  mentorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type InternshipStudentMentorsPk = "id";
export type InternshipStudentMentorsId = InternshipStudentMentors[InternshipStudentMentorsPk];
export type InternshipStudentMentorsOptionalAttributes = "deletedAt";
export type InternshipStudentMentorsCreationAttributes = Optional<InternshipStudentMentorsAttributes, InternshipStudentMentorsOptionalAttributes>;

export class InternshipStudentMentors extends Model<InternshipStudentMentorsAttributes, InternshipStudentMentorsCreationAttributes> implements InternshipStudentMentorsAttributes {
  id!: string;
  studentId!: string;
  mentorId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof InternshipStudentMentors {
    return InternshipStudentMentors.init({
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
    mentorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'mentor_id'
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
    tableName: 'internship_student_mentors',
    schema: 'public',
    timestamps: false
  });
  }
}
