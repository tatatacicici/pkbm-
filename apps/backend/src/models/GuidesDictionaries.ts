import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GuidesDictionariesAttributes {
  id: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesDictionariesPk = "id";
export type GuidesDictionariesId = GuidesDictionaries[GuidesDictionariesPk];
export type GuidesDictionariesOptionalAttributes = "title" | "description" | "deletedAt";
export type GuidesDictionariesCreationAttributes = Optional<GuidesDictionariesAttributes, GuidesDictionariesOptionalAttributes>;

export class GuidesDictionaries extends Model<GuidesDictionariesAttributes, GuidesDictionariesCreationAttributes> implements GuidesDictionariesAttributes {
  id!: string;
  title?: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GuidesDictionaries {
    return GuidesDictionaries.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
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
    tableName: 'guides_dictionaries',
    schema: 'public',
    timestamps: false
  });
  }
}
