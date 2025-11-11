import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticleFavoritesAttributes {
  id?: string;
  article_id: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ArticleFavoritesCreationAttributes = Optional<ArticleFavoritesAttributes, 'id' | 'created_at' | 'updated_at'>;

export class ArticleFavorites extends Model<ArticleFavoritesAttributes, ArticleFavoritesCreationAttributes> implements ArticleFavoritesAttributes {
  declare id?: string;
  declare article_id: string;
  declare user_id: string;
  declare created_at?: Date;
  declare updated_at?: Date;

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
