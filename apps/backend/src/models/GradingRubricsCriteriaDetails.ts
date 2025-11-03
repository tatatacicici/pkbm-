import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GradingRubricsCriteriaDetailsAttributes {
  pk: number;
  id?: string;
  criterionId: number;
  title: string;
  description?: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GradingRubricsCriteriaDetailsPk = "id";
export type GradingRubricsCriteriaDetailsId = GradingRubricsCriteriaDetails[GradingRubricsCriteriaDetailsPk];
export type GradingRubricsCriteriaDetailsOptionalAttributes = "pk" | "id" | "description" | "deletedAt";
export type GradingRubricsCriteriaDetailsCreationAttributes = Optional<GradingRubricsCriteriaDetailsAttributes, GradingRubricsCriteriaDetailsOptionalAttributes>;

export class GradingRubricsCriteriaDetails extends Model<GradingRubricsCriteriaDetailsAttributes, GradingRubricsCriteriaDetailsCreationAttributes> implements GradingRubricsCriteriaDetailsAttributes {
  pk!: number;
  id?: string;
  criterionId!: number;
  title!: string;
  description?: string;
  score!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GradingRubricsCriteriaDetails {
    return GradingRubricsCriteriaDetails.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: true,
      primaryKey: true
    },
    criterionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'criterion_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'grading_rubrics_criteria_details',
    schema: 'public',
    timestamps: false
  });
  }
}
