import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticleFavoritesAttributes {
  id?: any;
  article_id?: any;
  user_id?: any;
  created_at?: any;
  updated_at?: any;
}

export type ArticleFavoritesCreationAttributes = Optional<ArticleFavoritesAttributes, 'id'>;

export class ArticleFavorites extends Model<ArticleFavoritesAttributes, ArticleFavoritesCreationAttributes> implements ArticleFavoritesAttributes {
  declare id?: any;
  declare article_id?: any;
  declare user_id?: any;
  declare created_at?: any;
  declare updated_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticleFavorites {
    ArticleFavorites.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        article_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'article_favorites',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticleFavorites;
  }
}
