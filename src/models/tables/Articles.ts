import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesAttributes {
  id?: string;
  author_id: string;
  category_id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  thumbnail_id?: string;
  excerpt?: string;
  featured_image?: string;
  tags?: string;
  category?: string;
  view_count?: number;
  like_count?: number;
  published_at?: Date;
}

export type ArticlesCreationAttributes = Optional<ArticlesAttributes, 'id' | 'views' | 'deleted_at' | 'thumbnail_id' | 'excerpt' | 'featured_image' | 'tags' | 'category' | 'view_count' | 'like_count' | 'published_at'>;

export class Articles extends Model<ArticlesAttributes, ArticlesCreationAttributes> implements ArticlesAttributes {
  declare id?: string;
  declare author_id: string;
  declare category_id: string;
  declare title: string;
  declare content: string;
  declare thumbnail: string;
  declare slug: string;
  declare views?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare thumbnail_id?: string;
  declare excerpt?: string;
  declare featured_image?: string;
  declare tags?: string;
  declare category?: string;
  declare view_count?: number;
  declare like_count?: number;
  declare published_at?: Date;

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
