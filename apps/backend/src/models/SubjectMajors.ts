import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectMajorsAttributes {
  id: string;
  subjectId: string;
  majorId: string;
  semesterId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SubjectMajorsPk = "id";
export type SubjectMajorsId = SubjectMajors[SubjectMajorsPk];
export type SubjectMajorsOptionalAttributes = "deletedAt";
export type SubjectMajorsCreationAttributes = Optional<SubjectMajorsAttributes, SubjectMajorsOptionalAttributes>;

export class SubjectMajors extends Model<SubjectMajorsAttributes, SubjectMajorsCreationAttributes> implements SubjectMajorsAttributes {
  id!: string;
  subjectId!: string;
  majorId!: string;
  semesterId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubjectMajors {
    return SubjectMajors.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    majorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'major_id'
    },
    semesterId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'semester_id'
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
    tableName: 'subject_majors',
    schema: 'public',
    timestamps: false
  });
  }
}
