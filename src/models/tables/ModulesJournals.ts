import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesJournalsAttributes {
  id?: any;
  title?: any;
  content?: any;
  url?: any;
  module_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  duration_in_seconds?: any;
  document_id?: any;
  document_filename?: any;
}

export type ModulesJournalsCreationAttributes = Optional<ModulesJournalsAttributes, 'id'>;

export class ModulesJournals extends Model<ModulesJournalsAttributes, ModulesJournalsCreationAttributes> implements ModulesJournalsAttributes {
  declare id?: any;
  declare title?: any;
  declare content?: any;
  declare url?: any;
  declare module_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare duration_in_seconds?: any;
  declare document_id?: any;
  declare document_filename?: any;

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
