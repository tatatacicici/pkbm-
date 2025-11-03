import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsAttributes {
  pk: number;
  id: string;
  title: string;
  details: string;
  thumbnail: string;
  type: string;
  price: number;
  mentorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentCompetencyTestsPk = "pk";
export type AssessmentCompetencyTestsId = AssessmentCompetencyTests[AssessmentCompetencyTestsPk];
export type AssessmentCompetencyTestsOptionalAttributes = "pk" | "deletedAt";
export type AssessmentCompetencyTestsCreationAttributes = Optional<AssessmentCompetencyTestsAttributes, AssessmentCompetencyTestsOptionalAttributes>;

export class AssessmentCompetencyTests extends Model<AssessmentCompetencyTestsAttributes, AssessmentCompetencyTestsCreationAttributes> implements AssessmentCompetencyTestsAttributes {
  pk!: number;
  id!: string;
  title!: string;
  details!: string;
  thumbnail!: string;
  type!: string;
  price!: number;
  mentorId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssessmentCompetencyTests {
    return AssessmentCompetencyTests.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    mentorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'mentor_id'
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
    tableName: 'assessment_competency_tests',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assessment_competency_tests_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
