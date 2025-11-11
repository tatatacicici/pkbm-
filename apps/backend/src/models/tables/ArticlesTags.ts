import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesTagsAttributes {
  id?: string;
  tags_id: string;
  articles_id: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ArticlesTagsCreationAttributes = Optional<ArticlesTagsAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class ArticlesTags extends Model<ArticlesTagsAttributes, ArticlesTagsCreationAttributes> implements ArticlesTagsAttributes {
  declare id?: string;
  declare tags_id: string;
  declare articles_id: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticlesTags {
    ArticlesTags.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        tags_id: { type: DataTypes.UUID, allowNull: false },
        articles_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
