import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesTagsAttributes {
  id?: any;
  tags_id?: any;
  articles_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ArticlesTagsCreationAttributes = Optional<ArticlesTagsAttributes, 'id'>;

export class ArticlesTags extends Model<ArticlesTagsAttributes, ArticlesTagsCreationAttributes> implements ArticlesTagsAttributes {
  declare id?: any;
  declare tags_id?: any;
  declare articles_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
