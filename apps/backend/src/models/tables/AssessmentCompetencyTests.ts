import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsAttributes {
  pk: number;
  id?: string;
  title: string;
  details: string;
  thumbnail: string;
  type: string;
  price: number;
  mentor_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentCompetencyTestsCreationAttributes = Optional<AssessmentCompetencyTestsAttributes, 'id' | 'deleted_at'>;

export class AssessmentCompetencyTests extends Model<AssessmentCompetencyTestsAttributes, AssessmentCompetencyTestsCreationAttributes> implements AssessmentCompetencyTestsAttributes {
  declare pk: number;
  declare id?: string;
  declare title: string;
  declare details: string;
  declare thumbnail: string;
  declare type: string;
  declare price: number;
  declare mentor_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentCompetencyTests {
    AssessmentCompetencyTests.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        details: { type: DataTypes.TEXT, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.DOUBLE, allowNull: false },
        mentor_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assessment_competency_tests',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentCompetencyTests;
  }
}
