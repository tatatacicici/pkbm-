import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesDocumentsAttributes {
  id?: string;
  document_file?: string;
  module_id: string;
  title: string;
  duration_in_seconds?: number;
  document_id?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  content?: string;
}

export type ModulesDocumentsCreationAttributes = Optional<ModulesDocumentsAttributes, 'id' | 'document_file' | 'duration_in_seconds' | 'document_id' | 'deleted_at' | 'content'>;

export class ModulesDocuments extends Model<ModulesDocumentsAttributes, ModulesDocumentsCreationAttributes> implements ModulesDocumentsAttributes {
  declare id?: string;
  declare document_file?: string;
  declare module_id: string;
  declare title: string;
  declare duration_in_seconds?: number;
  declare document_id?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare content?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ModulesDocuments {
    ModulesDocuments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        document_file: { type: DataTypes.STRING, allowNull: true },
        module_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        duration_in_seconds: { type: DataTypes.INTEGER, allowNull: true },
        document_id: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'modules_documents',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesDocuments;
  }
}
