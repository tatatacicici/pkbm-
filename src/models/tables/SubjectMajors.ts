import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectMajorsAttributes {
  id?: string;
  subject_id: string;
  major_id: string;
  semester_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SubjectMajorsCreationAttributes = Optional<SubjectMajorsAttributes, 'id' | 'deleted_at'>;

export class SubjectMajors extends Model<SubjectMajorsAttributes, SubjectMajorsCreationAttributes> implements SubjectMajorsAttributes {
  declare id?: string;
  declare subject_id: string;
  declare major_id: string;
  declare semester_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
