import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticlesAttributes {
  id?: string;
  authorId: string;
  categoryId: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: string;
  excerpt?: string;
  featuredImage?: string;
  tags?: string;
  category?: string;
  viewCount?: number;
  likeCount?: number;
  publishedAt?: Date;
}

export type ArticlesCreationAttributes = Optional<ArticlesAttributes, 'id' | 'views' | 'deletedAt' | 'thumbnailId' | 'excerpt' | 'featuredImage' | 'tags' | 'category' | 'viewCount' | 'likeCount' | 'publishedAt'>;

export class Articles extends Model<ArticlesAttributes, ArticlesCreationAttributes> implements ArticlesAttributes {
  declare id?: string;
  declare authorId: string;
  declare categoryId: string;
  declare title: string;
  declare content: string;
  declare thumbnail: string;
  declare slug: string;
  declare views?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare thumbnailId?: string;
  declare excerpt?: string;
  declare featuredImage?: string;
  declare tags?: string;
  declare category?: string;
  declare viewCount?: number;
  declare likeCount?: number;
  declare publishedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Articles {
    Articles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        authorId: { type: DataTypes.UUID, allowNull: false,
            field: 'author_id'
        },
        categoryId: { type: DataTypes.UUID, allowNull: false,
            field: 'category_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        content: { type: DataTypes.TEXT, allowNull: false,
            field: 'content'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: false,
            field: 'thumbnail'
        },
        slug: { type: DataTypes.STRING, allowNull: false,
            field: 'slug'
        },
        views: { type: DataTypes.INTEGER,
            field: 'views'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        thumbnailId: { type: DataTypes.UUID, allowNull: true,
            field: 'thumbnail_id'
        },
        excerpt: { type: DataTypes.TEXT, allowNull: true,
            field: 'excerpt'
        },
        featuredImage: { type: DataTypes.STRING, allowNull: true,
            field: 'featured_image'
        },
        tags: { type: DataTypes.STRING, allowNull: true,
            field: 'tags'
        },
        category: { type: DataTypes.STRING, allowNull: true,
            field: 'category'
        },
        viewCount: { type: DataTypes.INTEGER,
            field: 'view_count'
        },
        likeCount: { type: DataTypes.INTEGER,
            field: 'like_count'
        },
        publishedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'published_at'
        }
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
