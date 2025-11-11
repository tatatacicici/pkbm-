import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesDocumentsAttributes {
  id?: any;
  document_file?: any;
  module_id?: any;
  title?: any;
  duration_in_seconds?: any;
  document_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  content?: any;
}

export type ModulesDocumentsCreationAttributes = Optional<ModulesDocumentsAttributes, 'id'>;

export class ModulesDocuments extends Model<ModulesDocumentsAttributes, ModulesDocumentsCreationAttributes> implements ModulesDocumentsAttributes {
  declare id?: any;
  declare document_file?: any;
  declare module_id?: any;
  declare title?: any;
  declare duration_in_seconds?: any;
  declare document_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare content?: any;

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
