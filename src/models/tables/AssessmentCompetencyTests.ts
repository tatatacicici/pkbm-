import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsAttributes {
  pk?: any;
  id?: any;
  title?: any;
  details?: any;
  thumbnail?: any;
  type?: any;
  price?: any;
  mentor_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentCompetencyTestsCreationAttributes = Optional<AssessmentCompetencyTestsAttributes, 'id'>;

export class AssessmentCompetencyTests extends Model<AssessmentCompetencyTestsAttributes, AssessmentCompetencyTestsCreationAttributes> implements AssessmentCompetencyTestsAttributes {
  declare pk?: any;
  declare id?: any;
  declare title?: any;
  declare details?: any;
  declare thumbnail?: any;
  declare type?: any;
  declare price?: any;
  declare mentor_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
