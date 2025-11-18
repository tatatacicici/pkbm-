import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesTagsAttributes {
  id?: string;
  tagsId: string;
  articlesId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ArticlesTagsCreationAttributes = Optional<ArticlesTagsAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class ArticlesTags extends Model<ArticlesTagsAttributes, ArticlesTagsCreationAttributes> implements ArticlesTagsAttributes {
  declare id?: string;
  declare tagsId: string;
  declare articlesId: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticlesTags {
    ArticlesTags.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        tagsId: { type: DataTypes.UUID, allowNull: false,
            field: 'tags_id'
        },
        articlesId: { type: DataTypes.UUID, allowNull: false,
            field: 'articles_id'
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
        tableName: 'articles_tags',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticlesTags;
  }
}
