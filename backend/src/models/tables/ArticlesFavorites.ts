import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesFavoritesAttributes {
  id?: string;
  userId: string;
  articleId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ArticlesFavoritesCreationAttributes = Optional<ArticlesFavoritesAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class ArticlesFavorites extends Model<ArticlesFavoritesAttributes, ArticlesFavoritesCreationAttributes> implements ArticlesFavoritesAttributes {
  declare id?: string;
  declare userId: string;
  declare articleId: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticlesFavorites {
    ArticlesFavorites.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        articleId: { type: DataTypes.UUID, allowNull: false,
            field: 'article_id'
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
        tableName: 'articles_favorites',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticlesFavorites;
  }
}
