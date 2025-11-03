import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ModulesJournalsAttributes {
  id: string;
  title?: string;
  content?: string;
  url?: string;
  moduleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  durationInSeconds?: number;
  order?: number;
  documentId?: number;
  documentFilename?: string;
}

export type ModulesJournalsPk = "id";
export type ModulesJournalsId = ModulesJournals[ModulesJournalsPk];
export type ModulesJournalsOptionalAttributes = "title" | "content" | "url" | "deletedAt" | "durationInSeconds" | "order" | "documentId" | "documentFilename";
export type ModulesJournalsCreationAttributes = Optional<ModulesJournalsAttributes, ModulesJournalsOptionalAttributes>;

export class ModulesJournals extends Model<ModulesJournalsAttributes, ModulesJournalsCreationAttributes> implements ModulesJournalsAttributes {
  id!: string;
  title?: string;
  content?: string;
  url?: string;
  moduleId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  durationInSeconds?: number;
  order?: number;
  documentId?: number;
  documentFilename?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ModulesJournals {
    return ModulesJournals.init({
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
    url: {
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
    durationInSeconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_in_seconds'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'modules_journals',
    schema: 'public',
    timestamps: false
  });
  }
}
