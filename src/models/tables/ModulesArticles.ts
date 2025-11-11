import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesArticlesAttributes {
  id?: any;
  title?: any;
  content?: any;
  module_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  url?: any;
  duration_in_seconds?: any;
  document_id?: any;
  document_filename?: any;
}

export type ModulesArticlesCreationAttributes = Optional<ModulesArticlesAttributes, 'id'>;

export class ModulesArticles extends Model<ModulesArticlesAttributes, ModulesArticlesCreationAttributes> implements ModulesArticlesAttributes {
  declare id?: any;
  declare title?: any;
  declare content?: any;
  declare module_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare url?: any;
  declare duration_in_seconds?: any;
  declare document_id?: any;
  declare document_filename?: any;

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
