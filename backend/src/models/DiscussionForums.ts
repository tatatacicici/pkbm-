import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DiscussionForumsAttributes {
  id: string;
  userId: string;
  sessionId: string;
  title?: string;
  content: string;
  isGlobal: boolean;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  imagesIds?: number[];
  imagesUrls?: string[];
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}

export type DiscussionForumsPk = "id";
export type DiscussionForumsId = DiscussionForums[DiscussionForumsPk];
export type DiscussionForumsOptionalAttributes = "title" | "images" | "deletedAt" | "imagesIds" | "imagesUrls" | "status";
export type DiscussionForumsCreationAttributes = Optional<DiscussionForumsAttributes, DiscussionForumsOptionalAttributes>;

export class DiscussionForums extends Model<DiscussionForumsAttributes, DiscussionForumsCreationAttributes> implements DiscussionForumsAttributes {
  id!: string;
  userId!: string;
  sessionId!: string;
  title?: string;
  content!: string;
  isGlobal!: boolean;
  images?: string[];
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  imagesIds?: number[];
  imagesUrls?: string[];
  status!: "DRAFT" | "PUBLISHED" | "ARCHIVED";


  static initModel(sequelize: Sequelize.Sequelize): typeof DiscussionForums {
    return DiscussionForums.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isGlobal: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_global'
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
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
    imagesIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      field: 'images_ids'
    },
    imagesUrls: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
      field: 'images_urls'
    },
    status: {
      type: DataTypes.ENUM("DRAFT","PUBLISHED","ARCHIVED"),
      allowNull: false,
      defaultValue: "PUBLISHED"
    }
  }, {
    sequelize,
    tableName: 'discussion_forums',
    schema: 'public',
    timestamps: false
  });
  }
}
