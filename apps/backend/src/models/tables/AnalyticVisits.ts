import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AnalyticVisitsAttributes {
  id?: string;
  student_id: string;
  reference_id?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AnalyticVisitsCreationAttributes = Optional<AnalyticVisitsAttributes, 'id' | 'reference_id' | 'deleted_at'>;

export class AnalyticVisits extends Model<AnalyticVisitsAttributes, AnalyticVisitsCreationAttributes> implements AnalyticVisitsAttributes {
  declare id?: string;
  declare student_id: string;
  declare reference_id?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
