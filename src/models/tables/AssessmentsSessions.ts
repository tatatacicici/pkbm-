import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsSessionsAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  type: string;
  status: string;
  day: string;
  booked_by: string;
  booked_at: Date;
  rubric_score?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsSessionsCreationAttributes = Optional<AssessmentsSessionsAttributes, 'id' | 'rubric_score' | 'deleted_at'>;

export class AssessmentsSessions extends Model<AssessmentsSessionsAttributes, AssessmentsSessionsCreationAttributes> implements AssessmentsSessionsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare type: string;
  declare status: string;
  declare day: string;
  declare booked_by: string;
  declare booked_at: Date;
  declare rubric_score?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
