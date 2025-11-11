import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubmissionDocumentsAttributes {
  id?: any;
  progress_id?: any;
  document_url?: any;
  document_filename?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  document_id?: any;
}

export type SubmissionDocumentsCreationAttributes = Optional<SubmissionDocumentsAttributes, 'id'>;

export class SubmissionDocuments extends Model<SubmissionDocumentsAttributes, SubmissionDocumentsCreationAttributes> implements SubmissionDocumentsAttributes {
  declare id?: any;
  declare progress_id?: any;
  declare document_url?: any;
  declare document_filename?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare document_id?: any;

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
