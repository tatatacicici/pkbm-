import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DictionarysAttributes {
  id: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DictionarysPk = "id";
export type DictionarysId = Dictionarys[DictionarysPk];
export type DictionarysOptionalAttributes = "url" | "title" | "description" | "deletedAt";
export type DictionarysCreationAttributes = Optional<DictionarysAttributes, DictionarysOptionalAttributes>;

export class Dictionarys extends Model<DictionarysAttributes, DictionarysCreationAttributes> implements DictionarysAttributes {
  id!: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Dictionarys {
    return Dictionarys.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'dictionarys',
    schema: 'public',
    timestamps: false
  });
  }
}
