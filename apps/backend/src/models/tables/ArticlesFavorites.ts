import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesFavoritesAttributes {
  id?: string;
  user_id: string;
  article_id: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ArticlesFavoritesCreationAttributes = Optional<ArticlesFavoritesAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class ArticlesFavorites extends Model<ArticlesFavoritesAttributes, ArticlesFavoritesCreationAttributes> implements ArticlesFavoritesAttributes {
  declare id?: string;
  declare user_id: string;
  declare article_id: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticlesFavorites {
    ArticlesFavorites.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        article_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'articles_favorites',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticlesFavorites;
  }
}
