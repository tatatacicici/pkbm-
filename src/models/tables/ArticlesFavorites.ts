import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesFavoritesAttributes {
  id?: any;
  user_id?: any;
  article_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ArticlesFavoritesCreationAttributes = Optional<ArticlesFavoritesAttributes, 'id'>;

export class ArticlesFavorites extends Model<ArticlesFavoritesAttributes, ArticlesFavoritesCreationAttributes> implements ArticlesFavoritesAttributes {
  declare id?: any;
  declare user_id?: any;
  declare article_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
