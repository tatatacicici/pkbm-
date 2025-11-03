import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MajorsAttributes {
  id: string;
  facultyId: string;
  name: string;
  degree: string;
  majorHeadId: string;
  thumbnail: string;
  description?: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  code?: string;
}

export type MajorsPk = "id";
export type MajorsId = Majors[MajorsPk];
export type MajorsOptionalAttributes = "description" | "deletedAt" | "thumbnailId" | "code";
export type MajorsCreationAttributes = Optional<MajorsAttributes, MajorsOptionalAttributes>;

export class Majors extends Model<MajorsAttributes, MajorsCreationAttributes> implements MajorsAttributes {
  id!: string;
  facultyId!: string;
  name!: string;
  degree!: string;
  majorHeadId!: string;
  thumbnail!: string;
  description?: string;
  slug!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  code?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Majors {
    return Majors.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    facultyId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'faculty_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    degree: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    majorHeadId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'major_head_id'
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'majors',
    schema: 'public',
    timestamps: false
  });
  }
}
