import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ArticlesCategoriesAttributes {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ArticlesCategoriesPk = "id";
export type ArticlesCategoriesId = ArticlesCategories[ArticlesCategoriesPk];
export type ArticlesCategoriesOptionalAttributes = "createdAt" | "updatedAt" | "deletedAt";
export type ArticlesCategoriesCreationAttributes = Optional<ArticlesCategoriesAttributes, ArticlesCategoriesOptionalAttributes>;

export class ArticlesCategories extends Model<ArticlesCategoriesAttributes, ArticlesCategoriesCreationAttributes> implements ArticlesCategoriesAttributes {
  id!: string;
  name!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ArticlesCategories {
    return ArticlesCategories.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'articles_categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "article_categories_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
