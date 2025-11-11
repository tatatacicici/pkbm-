import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesJournalsAttributes {
  id?: string;
  title?: string;
  content?: string;
  url?: string;
  module_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  duration_in_seconds?: number;
  document_id?: number;
  document_filename?: string;
}

export type ModulesJournalsCreationAttributes = Optional<ModulesJournalsAttributes, 'id' | 'title' | 'content' | 'url' | 'deleted_at' | 'duration_in_seconds' | 'document_id' | 'document_filename'>;

export class ModulesJournals extends Model<ModulesJournalsAttributes, ModulesJournalsCreationAttributes> implements ModulesJournalsAttributes {
  declare id?: string;
  declare title?: string;
  declare content?: string;
  declare url?: string;
  declare module_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare duration_in_seconds?: number;
  declare document_id?: number;
  declare document_filename?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ModulesJournals {
    ModulesJournals.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: true },
        url: { type: DataTypes.TEXT, allowNull: true },
        module_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        duration_in_seconds: { type: DataTypes.INTEGER, allowNull: true },
        document_id: { type: DataTypes.INTEGER, allowNull: true },
        document_filename: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'modules_journals',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesJournals;
  }
}
