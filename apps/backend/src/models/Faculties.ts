import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FacultiesAttributes {
  id: string;
  name: string;
  thumbnail: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  code?: string;
}

export type FacultiesPk = "id";
export type FacultiesId = Faculties[FacultiesPk];
export type FacultiesOptionalAttributes = "deletedAt" | "thumbnailId" | "code";
export type FacultiesCreationAttributes = Optional<FacultiesAttributes, FacultiesOptionalAttributes>;

export class Faculties extends Model<FacultiesAttributes, FacultiesCreationAttributes> implements FacultiesAttributes {
  id!: string;
  name!: string;
  thumbnail!: string;
  slug!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  code?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Faculties {
    return Faculties.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    },
    thumbnailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'thumbnail_id'
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'faculties',
    schema: 'public',
    timestamps: false
  });
  }
}
