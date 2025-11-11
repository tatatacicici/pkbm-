import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsAttributes {
  pk: number;
  id?: string;
  title: string;
  description?: string;
  type: string;
  major_id: string;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GradingRubricsCreationAttributes = Optional<GradingRubricsAttributes, 'id' | 'description' | 'deleted_at'>;

export class GradingRubrics extends Model<GradingRubricsAttributes, GradingRubricsCreationAttributes> implements GradingRubricsAttributes {
  declare pk: number;
  declare id?: string;
  declare title: string;
  declare description?: string;
  declare type: string;
  declare major_id: string;
  declare created_by: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GradingRubrics {
    GradingRubrics.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: false },
        major_id: { type: DataTypes.UUID, allowNull: false },
        created_by: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'grading_rubrics',
        timestamps: true,
        underscored: true,
      }
    );
    return GradingRubrics;
  }
}
