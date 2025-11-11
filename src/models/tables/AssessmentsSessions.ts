import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsAttributes {
  pk?: any;
  id?: any;
  assessment_id?: any;
  type?: any;
  status?: any;
  day?: any;
  booked_by?: any;
  booked_at?: any;
  rubric_score?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsSessionsCreationAttributes = Optional<AssessmentsSessionsAttributes, 'id'>;

export class AssessmentsSessions extends Model<AssessmentsSessionsAttributes, AssessmentsSessionsCreationAttributes> implements AssessmentsSessionsAttributes {
  declare pk?: any;
  declare id?: any;
  declare assessment_id?: any;
  declare type?: any;
  declare status?: any;
  declare day?: any;
  declare booked_by?: any;
  declare booked_at?: any;
  declare rubric_score?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsSessions {
    AssessmentsSessions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        day: { type: DataTypes.STRING, allowNull: false },
        booked_by: { type: DataTypes.UUID, allowNull: false },
        booked_at: { type: DataTypes.DATE, allowNull: false },
        rubric_score: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assessments_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsSessions;
  }
}
