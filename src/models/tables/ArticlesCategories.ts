import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesCategoriesAttributes {
  id?: any;
  name?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ArticlesCategoriesCreationAttributes = Optional<ArticlesCategoriesAttributes, 'id'>;

export class ArticlesCategories extends Model<ArticlesCategoriesAttributes, ArticlesCategoriesCreationAttributes> implements ArticlesCategoriesAttributes {
  declare id?: any;
  declare name?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticlesCategories {
    ArticlesCategories.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'articles_categories',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticlesCategories;
  }
}
