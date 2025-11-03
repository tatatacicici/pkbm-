import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ModulesVideosAttributes {
  id: string;
  moduleId: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  durationInSeconds?: number;
  order: number;
  content?: string;
}

export type ModulesVideosPk = "id";
export type ModulesVideosId = ModulesVideos[ModulesVideosPk];
export type ModulesVideosOptionalAttributes = "url" | "title" | "description" | "deletedAt" | "durationInSeconds" | "order" | "content";
export type ModulesVideosCreationAttributes = Optional<ModulesVideosAttributes, ModulesVideosOptionalAttributes>;

export class ModulesVideos extends Model<ModulesVideosAttributes, ModulesVideosCreationAttributes> implements ModulesVideosAttributes {
  id!: string;
  moduleId!: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  durationInSeconds?: number;
  order!: number;
  content?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ModulesVideos {
    return ModulesVideos.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    moduleId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'module_id'
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
    },
    durationInSeconds: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'duration_in_seconds'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modules_videos',
    schema: 'public',
    timestamps: false
  });
  }
}
