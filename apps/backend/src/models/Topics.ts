import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TopicsAttributes {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  slug: string;
}

export type TopicsPk = "id";
export type TopicsId = Topics[TopicsPk];
export type TopicsOptionalAttributes = "deletedAt";
export type TopicsCreationAttributes = Optional<TopicsAttributes, TopicsOptionalAttributes>;

export class Topics extends Model<TopicsAttributes, TopicsCreationAttributes> implements TopicsAttributes {
  id!: string;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  slug!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Topics {
    return Topics.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
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
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'topics',
    schema: 'public',
    timestamps: false
  });
  }
}
