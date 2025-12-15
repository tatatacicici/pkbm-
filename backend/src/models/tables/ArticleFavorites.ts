import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticleFavoritesAttributes {
  id?: string;
  articleId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ArticleFavoritesCreationAttributes = Optional<ArticleFavoritesAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export class ArticleFavorites extends Model<ArticleFavoritesAttributes, ArticleFavoritesCreationAttributes> implements ArticleFavoritesAttributes {
  declare id?: string;
  declare articleId: string;
  declare userId: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticleFavorites {
    ArticleFavorites.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        articleId: { type: DataTypes.UUID, allowNull: false,
            field: 'article_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        }
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
