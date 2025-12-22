import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface BootcampTopicsAttributes {
  id?: string;
  title: string;
  description?: string;
  durationWeeks?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type BootcampTopicsCreationAttributes = Optional<BootcampTopicsAttributes, 'id' | 'description' | 'durationWeeks' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class BootcampTopics extends Model<BootcampTopicsAttributes, BootcampTopicsCreationAttributes> implements BootcampTopicsAttributes {
  declare id?: string;
  declare title: string;
  declare description?: string;
  declare durationWeeks?: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof BootcampTopics {
    BootcampTopics.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        durationWeeks: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_weeks'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'bootcamp_topics',
        timestamps: true,
        underscored: true,
      }
    );
    return BootcampTopics;
  }
}
