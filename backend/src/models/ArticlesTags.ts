import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ArticlesTagsAttributes {
  id: string;
  tagsId: string;
  articlesId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type ArticlesTagsPk = "id";
export type ArticlesTagsId = ArticlesTags[ArticlesTagsPk];
export type ArticlesTagsOptionalAttributes = "createdAt" | "updatedAt" | "deletedAt";
export type ArticlesTagsCreationAttributes = Optional<ArticlesTagsAttributes, ArticlesTagsOptionalAttributes>;

export class ArticlesTags extends Model<ArticlesTagsAttributes, ArticlesTagsCreationAttributes> implements ArticlesTagsAttributes {
  id!: string;
  tagsId!: string;
  articlesId!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ArticlesTags {
    return ArticlesTags.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    tagsId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'tags_id'
    },
    articlesId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'articles_id'
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
    tableName: 'articles_tags',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "article_tags_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
