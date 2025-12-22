import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubmissionDocumentsAttributes {
  id?: string;
  progressId: string;
  documentUrl: string;
  documentFilename: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  documentId?: number;
}

export type SubmissionDocumentsCreationAttributes = Optional<SubmissionDocumentsAttributes, 'id' | 'deletedAt' | 'documentId'>;

export class SubmissionDocuments extends Model<SubmissionDocumentsAttributes, SubmissionDocumentsCreationAttributes> implements SubmissionDocumentsAttributes {
  declare id?: string;
  declare progressId: string;
  declare documentUrl: string;
  declare documentFilename: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare documentId?: number;

  public static initModel(sequelize: Sequelize): typeof SubmissionDocuments {
    SubmissionDocuments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        progressId: { type: DataTypes.UUID, allowNull: false,
            field: 'progress_id'
        },
        documentUrl: { type: DataTypes.TEXT, allowNull: false,
            field: 'document_url'
        },
        documentFilename: { type: DataTypes.TEXT, allowNull: false,
            field: 'document_filename'
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
        documentId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'document_id'
        }
      },
      {
        sequelize,
        tableName: 'submission_documents',
        timestamps: true,
        underscored: true,
      }
    );
    return SubmissionDocuments;
  }
}
