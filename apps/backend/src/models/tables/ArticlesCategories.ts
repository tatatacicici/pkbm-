import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesCategoriesAttributes {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ArticlesCategoriesCreationAttributes = Optional<ArticlesCategoriesAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class ArticlesCategories extends Model<ArticlesCategoriesAttributes, ArticlesCategoriesCreationAttributes> implements ArticlesCategoriesAttributes {
  declare id?: string;
  declare name: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticlesCategories {
    ArticlesCategories.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
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
        tableName: 'articles_categories',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticlesCategories;
  }
}
