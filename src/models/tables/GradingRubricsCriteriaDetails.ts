import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsCriteriaDetailsAttributes {
  pk?: any;
  id?: any;
  criterion_id?: any;
  title?: any;
  description?: any;
  score?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type GradingRubricsCriteriaDetailsCreationAttributes = Optional<GradingRubricsCriteriaDetailsAttributes, 'id'>;

export class GradingRubricsCriteriaDetails extends Model<GradingRubricsCriteriaDetailsAttributes, GradingRubricsCriteriaDetailsCreationAttributes> implements GradingRubricsCriteriaDetailsAttributes {
  declare pk?: any;
  declare id?: any;
  declare criterion_id?: any;
  declare title?: any;
  declare description?: any;
  declare score?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GradingRubricsCriteriaDetails {
    GradingRubricsCriteriaDetails.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        criterion_id: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        score: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'grading_rubrics_criteria_details',
        timestamps: true,
        underscored: true,
      }
    );
    return GradingRubricsCriteriaDetails;
  }
}
