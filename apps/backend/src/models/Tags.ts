import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TagsAttributes {
  id: string;
  tag: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  name?: string;
}

export type TagsPk = "id";
export type TagsId = Tags[TagsPk];
export type TagsOptionalAttributes = "deletedAt" | "name";
export type TagsCreationAttributes = Optional<TagsAttributes, TagsOptionalAttributes>;

export class Tags extends Model<TagsAttributes, TagsCreationAttributes> implements TagsAttributes {
  id!: string;
  tag!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Tags {
    return Tags.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    tag: {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tags',
    schema: 'public',
    timestamps: false
  });
  }
}
