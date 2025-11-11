import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AnalyticVisitsAttributes {
  id?: any;
  student_id?: any;
  reference_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AnalyticVisitsCreationAttributes = Optional<AnalyticVisitsAttributes, 'id'>;

export class AnalyticVisits extends Model<AnalyticVisitsAttributes, AnalyticVisitsCreationAttributes> implements AnalyticVisitsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare reference_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AnalyticVisits {
    AnalyticVisits.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        reference_id: { type: DataTypes.UUID, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'analytic_visits',
        timestamps: true,
        underscored: true,
      }
    );
    return AnalyticVisits;
  }
}
