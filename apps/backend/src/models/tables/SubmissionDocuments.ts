import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubmissionDocumentsAttributes {
  id?: string;
  progress_id: string;
  document_url: string;
  document_filename: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  document_id?: number;
}

export type SubmissionDocumentsCreationAttributes = Optional<SubmissionDocumentsAttributes, 'id' | 'deleted_at' | 'document_id'>;

export class SubmissionDocuments extends Model<SubmissionDocumentsAttributes, SubmissionDocumentsCreationAttributes> implements SubmissionDocumentsAttributes {
  declare id?: string;
  declare progress_id: string;
  declare document_url: string;
  declare document_filename: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare document_id?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubmissionDocuments {
    SubmissionDocuments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        progress_id: { type: DataTypes.UUID, allowNull: false },
        document_url: { type: DataTypes.TEXT, allowNull: false },
        document_filename: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        document_id: { type: DataTypes.INTEGER, allowNull: true }
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
