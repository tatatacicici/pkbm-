import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ArticlesAttributes {
  id: string;
  authorId: string;
  categoryId: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: string;
  excerpt?: string;
  featuredImage?: string;
  status: "DRAFT" | "PUBLISHED";
  tags?: string[];
  category?: string;
  viewCount: number;
  likeCount: number;
  publishedAt?: Date;
}

export type ArticlesPk = "id";
export type ArticlesId = Articles[ArticlesPk];
export type ArticlesOptionalAttributes = "views" | "deletedAt" | "thumbnailId" | "excerpt" | "featuredImage" | "status" | "tags" | "category" | "viewCount" | "likeCount" | "publishedAt";
export type ArticlesCreationAttributes = Optional<ArticlesAttributes, ArticlesOptionalAttributes>;

export class Articles extends Model<ArticlesAttributes, ArticlesCreationAttributes> implements ArticlesAttributes {
  id!: string;
  authorId!: string;
  categoryId!: string;
  title!: string;
  content!: string;
  thumbnail!: string;
  slug!: string;
  views!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  thumbnailId?: string;
  excerpt?: string;
  featuredImage?: string;
  status!: "DRAFT" | "PUBLISHED";
  tags?: string[];
  category?: string;
  viewCount!: number;
  likeCount!: number;
  publishedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Articles {
    return Articles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    authorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'author_id'
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'category_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    thumbnailId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'thumbnail_id'
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    featuredImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'featured_image'
    },
    status: {
      type: DataTypes.ENUM("DRAFT","PUBLISHED"),
      allowNull: false,
      defaultValue: "DRAFT"
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ["(ARRAY[]"]
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'view_count'
    },
    likeCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'like_count'
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'published_at'
    }
  }, {
    sequelize,
    tableName: 'articles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "articles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
