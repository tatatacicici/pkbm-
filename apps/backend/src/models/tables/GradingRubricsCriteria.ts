import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsCriteriaAttributes {
  pk: number;
  id?: string;
  rubric_id: number;
  aspect: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GradingRubricsCriteriaCreationAttributes = Optional<GradingRubricsCriteriaAttributes, 'id' | 'description' | 'deleted_at'>;

export class GradingRubricsCriteria extends Model<GradingRubricsCriteriaAttributes, GradingRubricsCriteriaCreationAttributes> implements GradingRubricsCriteriaAttributes {
  declare pk: number;
  declare id?: string;
  declare rubric_id: number;
  declare aspect: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GradingRubricsCriteria {
    GradingRubricsCriteria.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        rubric_id: { type: DataTypes.INTEGER, allowNull: false },
        aspect: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'grading_rubrics_criteria',
        timestamps: true,
        underscored: true,
      }
    );
    return GradingRubricsCriteria;
  }
}
