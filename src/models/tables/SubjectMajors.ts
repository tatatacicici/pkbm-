import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectMajorsAttributes {
  id?: any;
  subject_id?: any;
  major_id?: any;
  semester_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SubjectMajorsCreationAttributes = Optional<SubjectMajorsAttributes, 'id'>;

export class SubjectMajors extends Model<SubjectMajorsAttributes, SubjectMajorsCreationAttributes> implements SubjectMajorsAttributes {
  declare id?: any;
  declare subject_id?: any;
  declare major_id?: any;
  declare semester_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectMajors {
    SubjectMajors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        major_id: { type: DataTypes.UUID, allowNull: false },
        semester_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'subject_majors',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectMajors;
  }
}
