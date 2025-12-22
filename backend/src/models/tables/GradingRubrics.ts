import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GradingRubricsAttributes {
  pk: number;
  id?: string;
  title: string;
  description?: string;
  type: string;
  majorId: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GradingRubricsCreationAttributes = Optional<GradingRubricsAttributes, 'id' | 'description' | 'deletedAt'>;

export class GradingRubrics extends Model<GradingRubricsAttributes, GradingRubricsCreationAttributes> implements GradingRubricsAttributes {
  declare pk: number;
  declare id?: string;
  declare title: string;
  declare description?: string;
  declare type: string;
  declare majorId: string;
  declare createdBy: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GradingRubrics {
    GradingRubrics.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        majorId: { type: DataTypes.UUID, allowNull: false,
            field: 'major_id'
        },
        createdBy: { type: DataTypes.UUID, allowNull: false,
            field: 'created_by'
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
        tableName: 'grading_rubrics',
        timestamps: true,
        underscored: true,
      }
    );
    return GradingRubrics;
  }
}
