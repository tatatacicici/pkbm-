import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsCriteriaDetailsAttributes {
  pk: number;
  id?: string;
  criterionId: number;
  title: string;
  description?: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GradingRubricsCriteriaDetailsCreationAttributes = Optional<GradingRubricsCriteriaDetailsAttributes, 'id' | 'description' | 'deletedAt'>;

export class GradingRubricsCriteriaDetails extends Model<GradingRubricsCriteriaDetailsAttributes, GradingRubricsCriteriaDetailsCreationAttributes> implements GradingRubricsCriteriaDetailsAttributes {
  declare pk: number;
  declare id?: string;
  declare criterionId: number;
  declare title: string;
  declare description?: string;
  declare score: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GradingRubricsCriteriaDetails {
    GradingRubricsCriteriaDetails.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        criterionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'criterion_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        score: { type: DataTypes.INTEGER, allowNull: false,
            field: 'score'
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
        tableName: 'grading_rubrics_criteria_details',
        timestamps: true,
        underscored: true,
      }
    );
    return GradingRubricsCriteriaDetails;
  }
}
