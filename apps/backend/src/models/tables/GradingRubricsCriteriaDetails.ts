import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsCriteriaDetailsAttributes {
  pk: number;
  id?: string;
  criterion_id: number;
  title: string;
  description?: string;
  score: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GradingRubricsCriteriaDetailsCreationAttributes = Optional<GradingRubricsCriteriaDetailsAttributes, 'id' | 'description' | 'deleted_at'>;

export class GradingRubricsCriteriaDetails extends Model<GradingRubricsCriteriaDetailsAttributes, GradingRubricsCriteriaDetailsCreationAttributes> implements GradingRubricsCriteriaDetailsAttributes {
  declare pk: number;
  declare id?: string;
  declare criterion_id: number;
  declare title: string;
  declare description?: string;
  declare score: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
