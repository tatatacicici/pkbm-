import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ArticleLikesAttributes {
  id: string;
  articleId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ArticleLikesPk = "id";
export type ArticleLikesId = ArticleLikes[ArticleLikesPk];
export type ArticleLikesOptionalAttributes = "createdAt" | "updatedAt";
export type ArticleLikesCreationAttributes = Optional<ArticleLikesAttributes, ArticleLikesOptionalAttributes>;

export class ArticleLikes extends Model<ArticleLikesAttributes, ArticleLikesCreationAttributes> implements ArticleLikesAttributes {
  id!: string;
  articleId!: string;
  userId!: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ArticleLikes {
    return ArticleLikes.init({
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
    tableName: 'article_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "article_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
