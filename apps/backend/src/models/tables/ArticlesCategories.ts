import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesCategoriesAttributes {
  id?: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type ArticlesCategoriesCreationAttributes = Optional<ArticlesCategoriesAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class ArticlesCategories extends Model<ArticlesCategoriesAttributes, ArticlesCategoriesCreationAttributes> implements ArticlesCategoriesAttributes {
  declare id?: string;
  declare name: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

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
