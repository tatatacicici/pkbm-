import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentDocumentsAttributes {
  id?: any;
  assignment_id?: any;
  document_url?: any;
  document_filename?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  document_id?: any;
}

export type AssignmentDocumentsCreationAttributes = Optional<AssignmentDocumentsAttributes, 'id'>;

export class AssignmentDocuments extends Model<AssignmentDocumentsAttributes, AssignmentDocumentsCreationAttributes> implements AssignmentDocumentsAttributes {
  declare id?: any;
  declare assignment_id?: any;
  declare document_url?: any;
  declare document_filename?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare document_id?: any;

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
