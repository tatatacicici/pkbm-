import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GuidesBooksAttributes {
  id: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesBooksPk = "id";
export type GuidesBooksId = GuidesBooks[GuidesBooksPk];
export type GuidesBooksOptionalAttributes = "title" | "description" | "deletedAt";
export type GuidesBooksCreationAttributes = Optional<GuidesBooksAttributes, GuidesBooksOptionalAttributes>;

export class GuidesBooks extends Model<GuidesBooksAttributes, GuidesBooksCreationAttributes> implements GuidesBooksAttributes {
  id!: string;
  title?: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GuidesBooks {
    return GuidesBooks.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
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
    tableName: 'guides_books',
    schema: 'public',
    timestamps: false
  });
  }
}
