import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface InternshipStudentMentorsAttributes {
  id?: any;
  student_id?: any;
  mentor_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type InternshipStudentMentorsCreationAttributes = Optional<InternshipStudentMentorsAttributes, 'id'>;

export class InternshipStudentMentors extends Model<InternshipStudentMentorsAttributes, InternshipStudentMentorsCreationAttributes> implements InternshipStudentMentorsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare mentor_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
