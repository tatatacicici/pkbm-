import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ArticleFavoritesAttributes {
  id: string;
  articleId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ArticleFavoritesPk = "id";
export type ArticleFavoritesId = ArticleFavorites[ArticleFavoritesPk];
export type ArticleFavoritesOptionalAttributes = "createdAt" | "updatedAt";
export type ArticleFavoritesCreationAttributes = Optional<ArticleFavoritesAttributes, ArticleFavoritesOptionalAttributes>;

export class ArticleFavorites extends Model<ArticleFavoritesAttributes, ArticleFavoritesCreationAttributes> implements ArticleFavoritesAttributes {
  id!: string;
  articleId!: string;
  userId!: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ArticleFavorites {
    return ArticleFavorites.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    articleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'article_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
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
    }
  }, {
    sequelize,
    tableName: 'article_favorites',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "article_favorites_pkey1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
