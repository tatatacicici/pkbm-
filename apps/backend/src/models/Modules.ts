import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ModulesAttributes {
  id: string;
  sessionId: string;
  documentId?: string[];
  videoId?: string[];
  title: string;
  description: string;
  durationSec?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  order?: number;
  status: "draft" | "published" | "DRAFT" | "PUBLISHED";
}

export type ModulesPk = "id";
export type ModulesId = Modules[ModulesPk];
export type ModulesOptionalAttributes = "documentId" | "videoId" | "durationSec" | "deletedAt" | "order" | "status";
export type ModulesCreationAttributes = Optional<ModulesAttributes, ModulesOptionalAttributes>;

export class Modules extends Model<ModulesAttributes, ModulesCreationAttributes> implements ModulesAttributes {
  id!: string;
  sessionId!: string;
  documentId?: string[];
  videoId?: string[];
  title!: string;
  description!: string;
  durationSec?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  order?: number;
  status!: "draft" | "published" | "DRAFT" | "PUBLISHED";


  static initModel(sequelize: Sequelize.Sequelize): typeof Modules {
    return Modules.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    documentId: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      field: 'document_id'
    },
    videoId: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      field: 'video_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    durationSec: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_sec'
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
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("draft","published","DRAFT","PUBLISHED"),
      allowNull: false,
      defaultValue: "DRAFT"
    }
  }, {
    sequelize,
    tableName: 'modules',
    schema: 'public',
    timestamps: false
  });
  }
}
