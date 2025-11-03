import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GradingRubricsAttributes {
  pk: number;
  id?: string;
  title: string;
  description?: string;
  type: string;
  majorId: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GradingRubricsPk = "id";
export type GradingRubricsId = GradingRubrics[GradingRubricsPk];
export type GradingRubricsOptionalAttributes = "pk" | "id" | "description" | "deletedAt";
export type GradingRubricsCreationAttributes = Optional<GradingRubricsAttributes, GradingRubricsOptionalAttributes>;

export class GradingRubrics extends Model<GradingRubricsAttributes, GradingRubricsCreationAttributes> implements GradingRubricsAttributes {
  pk!: number;
  id?: string;
  title!: string;
  description?: string;
  type!: string;
  majorId!: string;
  createdBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GradingRubrics {
    return GradingRubrics.init({
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    majorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'major_id'
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'created_by'
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
    tableName: 'grading_rubrics',
    schema: 'public',
    timestamps: false
  });
  }
}
