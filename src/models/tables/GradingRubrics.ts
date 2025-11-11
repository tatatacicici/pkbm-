import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsAttributes {
  pk?: any;
  id?: any;
  title?: any;
  description?: any;
  type?: any;
  major_id?: any;
  created_by?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type GradingRubricsCreationAttributes = Optional<GradingRubricsAttributes, 'id'>;

export class GradingRubrics extends Model<GradingRubricsAttributes, GradingRubricsCreationAttributes> implements GradingRubricsAttributes {
  declare pk?: any;
  declare id?: any;
  declare title?: any;
  declare description?: any;
  declare type?: any;
  declare major_id?: any;
  declare created_by?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
