import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssignmentDocumentsAttributes {
  id: string;
  assignmentId: string;
  documentUrl: string;
  documentFilename: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  documentId?: number;
}

export type AssignmentDocumentsPk = "id";
export type AssignmentDocumentsId = AssignmentDocuments[AssignmentDocumentsPk];
export type AssignmentDocumentsOptionalAttributes = "deletedAt" | "documentId";
export type AssignmentDocumentsCreationAttributes = Optional<AssignmentDocumentsAttributes, AssignmentDocumentsOptionalAttributes>;

export class AssignmentDocuments extends Model<AssignmentDocumentsAttributes, AssignmentDocumentsCreationAttributes> implements AssignmentDocumentsAttributes {
  id!: string;
  assignmentId!: string;
  documentUrl!: string;
  documentFilename!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  documentId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssignmentDocuments {
    return AssignmentDocuments.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    assignmentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'assignment_id'
    },
    documentUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'document_url'
    },
    documentFilename: {
      type: DataTypes.STRING(255),
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
    tableName: 'assignment_documents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assignment_documents_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
