import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentDocumentsAttributes {
  id?: string;
  assignment_id: string;
  document_url: string;
  document_filename: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  document_id?: number;
}

export type AssignmentDocumentsCreationAttributes = Optional<AssignmentDocumentsAttributes, 'id' | 'deleted_at' | 'document_id'>;

export class AssignmentDocuments extends Model<AssignmentDocumentsAttributes, AssignmentDocumentsCreationAttributes> implements AssignmentDocumentsAttributes {
  declare id?: string;
  declare assignment_id: string;
  declare document_url: string;
  declare document_filename: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare document_id?: number;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssignmentDocuments {
    AssignmentDocuments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        assignment_id: { type: DataTypes.UUID, allowNull: false },
        document_url: { type: DataTypes.STRING, allowNull: false },
        document_filename: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        document_id: { type: DataTypes.INTEGER, allowNull: true }
      },
      {
        sequelize,
        tableName: 'assignment_documents',
        timestamps: true,
        underscored: true,
      }
    );
    return AssignmentDocuments;
  }
}
