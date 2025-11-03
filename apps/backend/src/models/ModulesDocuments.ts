import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ModulesDocumentsAttributes {
  id: string;
  documentFile?: string;
  moduleId: string;
  title: string;
  durationInSeconds?: number;
  documentId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  order: number;
  content?: string;
}

export type ModulesDocumentsPk = "id";
export type ModulesDocumentsId = ModulesDocuments[ModulesDocumentsPk];
export type ModulesDocumentsOptionalAttributes = "documentFile" | "durationInSeconds" | "documentId" | "deletedAt" | "order" | "content";
export type ModulesDocumentsCreationAttributes = Optional<ModulesDocumentsAttributes, ModulesDocumentsOptionalAttributes>;

export class ModulesDocuments extends Model<ModulesDocumentsAttributes, ModulesDocumentsCreationAttributes> implements ModulesDocumentsAttributes {
  id!: string;
  documentFile?: string;
  moduleId!: string;
  title!: string;
  durationInSeconds?: number;
  documentId?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  order!: number;
  content?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ModulesDocuments {
    return ModulesDocuments.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    documentFile: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'document_file'
    },
    moduleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'module_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    durationInSeconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_in_seconds'
    },
    documentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'document_id'
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modules_documents',
    schema: 'public',
    timestamps: false
  });
  }
}
