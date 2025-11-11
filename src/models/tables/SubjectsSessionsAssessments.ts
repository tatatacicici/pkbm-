import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsAssessmentsAttributes {
  id?: any;
  title?: any;
  description?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  subject_id?: any;
  session_id?: any;
}

export type SubjectsSessionsAssessmentsCreationAttributes = Optional<SubjectsSessionsAssessmentsAttributes, 'id'>;

export class SubjectsSessionsAssessments extends Model<SubjectsSessionsAssessmentsAttributes, SubjectsSessionsAssessmentsCreationAttributes> implements SubjectsSessionsAssessmentsAttributes {
  declare id?: any;
  declare title?: any;
  declare description?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare subject_id?: any;
  declare session_id?: any;

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
