import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAssessorsAttributes {
  pk: number;
  id?: string;
  assessment_id: number;
  assessor_id: string;
  role: string;
  assigned_at: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsAssessorsCreationAttributes = Optional<AssessmentsAssessorsAttributes, 'id' | 'deleted_at'>;

export class AssessmentsAssessors extends Model<AssessmentsAssessorsAttributes, AssessmentsAssessorsCreationAttributes> implements AssessmentsAssessorsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessment_id: number;
  declare assessor_id: string;
  declare role: string;
  declare assigned_at: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsAssessors {
    AssessmentsAssessors.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assessment_id: { type: DataTypes.INTEGER, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        assigned_at: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assessments_assessors',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsAssessors;
  }
}
