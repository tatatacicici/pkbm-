import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsAssessmentsAttributes {
  id?: string;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  subject_id: string;
  session_id: string;
}

export type SubjectsSessionsAssessmentsCreationAttributes = Optional<SubjectsSessionsAssessmentsAttributes, 'id' | 'deleted_at'>;

export class SubjectsSessionsAssessments extends Model<SubjectsSessionsAssessmentsAttributes, SubjectsSessionsAssessmentsCreationAttributes> implements SubjectsSessionsAssessmentsAttributes {
  declare id?: string;
  declare title: string;
  declare description: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare subject_id: string;
  declare session_id: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectsSessionsAssessments {
    SubjectsSessionsAssessments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false }
      },
      {
        sequelize,
        tableName: 'subjects_sessions_assessments',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectsSessionsAssessments;
  }
}
