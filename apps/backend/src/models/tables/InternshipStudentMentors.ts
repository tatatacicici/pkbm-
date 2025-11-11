import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface InternshipStudentMentorsAttributes {
  id?: string;
  student_id: string;
  mentor_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type InternshipStudentMentorsCreationAttributes = Optional<InternshipStudentMentorsAttributes, 'id' | 'deleted_at'>;

export class InternshipStudentMentors extends Model<InternshipStudentMentorsAttributes, InternshipStudentMentorsCreationAttributes> implements InternshipStudentMentorsAttributes {
  declare id?: string;
  declare student_id: string;
  declare mentor_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof InternshipStudentMentors {
    InternshipStudentMentors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        mentor_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
