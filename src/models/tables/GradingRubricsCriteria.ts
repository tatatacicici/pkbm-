import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsCriteriaAttributes {
  pk?: any;
  id?: any;
  rubric_id?: any;
  aspect?: any;
  description?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type GradingRubricsCriteriaCreationAttributes = Optional<GradingRubricsCriteriaAttributes, 'id'>;

export class GradingRubricsCriteria extends Model<GradingRubricsCriteriaAttributes, GradingRubricsCriteriaCreationAttributes> implements GradingRubricsCriteriaAttributes {
  declare pk?: any;
  declare id?: any;
  declare rubric_id?: any;
  declare aspect?: any;
  declare description?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
