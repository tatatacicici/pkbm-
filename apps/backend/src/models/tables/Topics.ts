import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TopicsAttributes {
  id?: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  slug: string;
}

export type TopicsCreationAttributes = Optional<TopicsAttributes, 'id' | 'deletedAt'>;

export class Topics extends Model<TopicsAttributes, TopicsCreationAttributes> implements TopicsAttributes {
  declare id?: string;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare slug: string;

  public static initModel(sequelize: Sequelize): typeof Topics {
    Topics.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        slug: { type: DataTypes.STRING, allowNull: false,
            field: 'slug'
        }
      },
      {
        sequelize,
        tableName: 'topics',
        timestamps: true,
        underscored: false,
      }
    );
    return Topics;
  }
}
