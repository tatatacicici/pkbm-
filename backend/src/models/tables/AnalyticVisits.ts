import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AnalyticVisitsAttributes {
  id?: string;
  studentId: string;
  referenceId?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AnalyticVisitsCreationAttributes = Optional<AnalyticVisitsAttributes, 'id' | 'referenceId' | 'deletedAt'>;

export class AnalyticVisits extends Model<AnalyticVisitsAttributes, AnalyticVisitsCreationAttributes> implements AnalyticVisitsAttributes {
  declare id?: string;
  declare studentId: string;
  declare referenceId?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AnalyticVisits {
    AnalyticVisits.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        referenceId: { type: DataTypes.UUID, allowNull: true,
            field: 'reference_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
