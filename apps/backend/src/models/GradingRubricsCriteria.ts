import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GradingRubricsCriteriaAttributes {
  pk: number;
  id?: string;
  rubricId: number;
  aspect: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GradingRubricsCriteriaPk = "id";
export type GradingRubricsCriteriaId = GradingRubricsCriteria[GradingRubricsCriteriaPk];
export type GradingRubricsCriteriaOptionalAttributes = "pk" | "id" | "description" | "deletedAt";
export type GradingRubricsCriteriaCreationAttributes = Optional<GradingRubricsCriteriaAttributes, GradingRubricsCriteriaOptionalAttributes>;

export class GradingRubricsCriteria extends Model<GradingRubricsCriteriaAttributes, GradingRubricsCriteriaCreationAttributes> implements GradingRubricsCriteriaAttributes {
  pk!: number;
  id?: string;
  rubricId!: number;
  aspect!: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GradingRubricsCriteria {
    return GradingRubricsCriteria.init({
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
    rubricId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rubric_id'
    },
    aspect: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'grading_rubrics_criteria',
    schema: 'public',
    timestamps: false
  });
  }
}
