import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesAttributes {
  id?: any;
  author_id?: any;
  category_id?: any;
  title?: any;
  content?: any;
  thumbnail?: any;
  slug?: any;
  views?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  thumbnail_id?: any;
  excerpt?: any;
  featured_image?: any;
  tags?: any;
  category?: any;
  view_count?: any;
  like_count?: any;
  published_at?: any;
}

export type ArticlesCreationAttributes = Optional<ArticlesAttributes, 'id'>;

export class Articles extends Model<ArticlesAttributes, ArticlesCreationAttributes> implements ArticlesAttributes {
  declare id?: any;
  declare author_id?: any;
  declare category_id?: any;
  declare title?: any;
  declare content?: any;
  declare thumbnail?: any;
  declare slug?: any;
  declare views?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare thumbnail_id?: any;
  declare excerpt?: any;
  declare featured_image?: any;
  declare tags?: any;
  declare category?: any;
  declare view_count?: any;
  declare like_count?: any;
  declare published_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Articles {
    Articles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        author_id: { type: DataTypes.UUID, allowNull: false },
        category_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        content: { type: DataTypes.TEXT, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: false },
        views: { type: DataTypes.INTEGER },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        thumbnail_id: { type: DataTypes.UUID, allowNull: true },
        excerpt: { type: DataTypes.TEXT, allowNull: true },
        featured_image: { type: DataTypes.STRING, allowNull: true },
        tags: { type: DataTypes.STRING, allowNull: true },
        category: { type: DataTypes.STRING, allowNull: true },
        view_count: { type: DataTypes.INTEGER },
        like_count: { type: DataTypes.INTEGER },
        published_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'articles',
        timestamps: true,
        underscored: false,
      }
    );
    return Articles;
  }
}
