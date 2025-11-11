import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesVideosAttributes {
  id?: string;
  module_id: string;
  url?: string;
  title?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  duration_in_seconds?: number;
  content?: string;
}

export type ModulesVideosCreationAttributes = Optional<ModulesVideosAttributes, 'id' | 'url' | 'title' | 'description' | 'deleted_at' | 'duration_in_seconds' | 'content'>;

export class ModulesVideos extends Model<ModulesVideosAttributes, ModulesVideosCreationAttributes> implements ModulesVideosAttributes {
  declare id?: string;
  declare module_id: string;
  declare url?: string;
  declare title?: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare duration_in_seconds?: number;
  declare content?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ModulesVideos {
    ModulesVideos.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        module_id: { type: DataTypes.UUID, allowNull: false },
        url: { type: DataTypes.STRING, allowNull: true },
        title: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        duration_in_seconds: { type: DataTypes.INTEGER, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'modules_videos',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesVideos;
  }
}
