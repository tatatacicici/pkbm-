import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ArticlesFavoritesAttributes {
  id: string;
  userId: string;
  articleId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ArticlesFavoritesPk = "id";
export type ArticlesFavoritesId = ArticlesFavorites[ArticlesFavoritesPk];
export type ArticlesFavoritesOptionalAttributes = "createdAt" | "updatedAt" | "deletedAt";
export type ArticlesFavoritesCreationAttributes = Optional<ArticlesFavoritesAttributes, ArticlesFavoritesOptionalAttributes>;

export class ArticlesFavorites extends Model<ArticlesFavoritesAttributes, ArticlesFavoritesCreationAttributes> implements ArticlesFavoritesAttributes {
  id!: string;
  userId!: string;
  articleId!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ArticlesFavorites {
    return ArticlesFavorites.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    articleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'article_id'
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
    tableName: 'articles_favorites',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "article_favorites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
