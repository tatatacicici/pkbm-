import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubmissionDocumentsAttributes {
  id: string;
  progressId: string;
  documentUrl: string;
  documentFilename: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  documentId?: number;
}

export type SubmissionDocumentsPk = "id";
export type SubmissionDocumentsId = SubmissionDocuments[SubmissionDocumentsPk];
export type SubmissionDocumentsOptionalAttributes = "deletedAt" | "documentId";
export type SubmissionDocumentsCreationAttributes = Optional<SubmissionDocumentsAttributes, SubmissionDocumentsOptionalAttributes>;

export class SubmissionDocuments extends Model<SubmissionDocumentsAttributes, SubmissionDocumentsCreationAttributes> implements SubmissionDocumentsAttributes {
  id!: string;
  progressId!: string;
  documentUrl!: string;
  documentFilename!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  documentId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubmissionDocuments {
    return SubmissionDocuments.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    progressId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'progress_id'
    },
    documentUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'document_url'
    },
    documentFilename: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'document_filename'
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
    documentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'document_id'
    }
  }, {
    sequelize,
    tableName: 'submission_documents',
    schema: 'public',
    timestamps: false
  });
  }
}
