import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesArticlesAttributes {
  id?: string;
  title?: string;
  content?: string;
  module_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  url?: string;
  duration_in_seconds?: number;
  document_id?: number;
  document_filename?: string;
}

export type ModulesArticlesCreationAttributes = Optional<ModulesArticlesAttributes, 'id' | 'title' | 'content' | 'deleted_at' | 'url' | 'duration_in_seconds' | 'document_id' | 'document_filename'>;

export class ModulesArticles extends Model<ModulesArticlesAttributes, ModulesArticlesCreationAttributes> implements ModulesArticlesAttributes {
  declare id?: string;
  declare title?: string;
  declare content?: string;
  declare module_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare url?: string;
  declare duration_in_seconds?: number;
  declare document_id?: number;
  declare document_filename?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ModulesArticles {
    ModulesArticles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: true },
        module_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        url: { type: DataTypes.TEXT, allowNull: true },
        duration_in_seconds: { type: DataTypes.INTEGER, allowNull: true },
        document_id: { type: DataTypes.INTEGER, allowNull: true },
        document_filename: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'modules_articles',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesArticles;
  }
}
