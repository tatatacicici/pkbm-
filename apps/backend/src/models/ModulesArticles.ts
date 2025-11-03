import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ModulesArticlesAttributes {
  id: string;
  title?: string;
  content?: string;
  moduleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  url?: string;
  durationInSeconds?: number;
  order?: number;
  documentId?: number;
  documentFilename?: string;
}

export type ModulesArticlesPk = "id";
export type ModulesArticlesId = ModulesArticles[ModulesArticlesPk];
export type ModulesArticlesOptionalAttributes = "title" | "content" | "deletedAt" | "url" | "durationInSeconds" | "order" | "documentId" | "documentFilename";
export type ModulesArticlesCreationAttributes = Optional<ModulesArticlesAttributes, ModulesArticlesOptionalAttributes>;

export class ModulesArticles extends Model<ModulesArticlesAttributes, ModulesArticlesCreationAttributes> implements ModulesArticlesAttributes {
  id!: string;
  title?: string;
  content?: string;
  moduleId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  url?: string;
  durationInSeconds?: number;
  order?: number;
  documentId?: number;
  documentFilename?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ModulesArticles {
    return ModulesArticles.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    moduleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'module_id'
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
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    durationInSeconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_in_seconds'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    documentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'document_id'
    },
    documentFilename: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'document_filename'
    }
  }, {
    sequelize,
    tableName: 'modules_articles',
    schema: 'public',
    timestamps: false
  });
  }
}
