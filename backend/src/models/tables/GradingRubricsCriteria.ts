import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsCriteriaAttributes {
  pk: number;
  id?: string;
  rubricId: number;
  aspect: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GradingRubricsCriteriaCreationAttributes = Optional<GradingRubricsCriteriaAttributes, 'id' | 'description' | 'deletedAt'>;

export class GradingRubricsCriteria extends Model<GradingRubricsCriteriaAttributes, GradingRubricsCriteriaCreationAttributes> implements GradingRubricsCriteriaAttributes {
  declare pk: number;
  declare id?: string;
  declare rubricId: number;
  declare aspect: string;
  declare description?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GradingRubricsCriteria {
    GradingRubricsCriteria.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        rubricId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'rubric_id'
        },
        aspect: { type: DataTypes.STRING, allowNull: false,
            field: 'aspect'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
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
        tableName: 'grading_rubrics_criteria',
        timestamps: true,
        underscored: true,
      }
    );
    return GradingRubricsCriteria;
  }
}
