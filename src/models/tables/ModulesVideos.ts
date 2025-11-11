import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesVideosAttributes {
  id?: any;
  module_id?: any;
  url?: any;
  title?: any;
  description?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  duration_in_seconds?: any;
  content?: any;
}

export type ModulesVideosCreationAttributes = Optional<ModulesVideosAttributes, 'id'>;

export class ModulesVideos extends Model<ModulesVideosAttributes, ModulesVideosCreationAttributes> implements ModulesVideosAttributes {
  declare id?: any;
  declare module_id?: any;
  declare url?: any;
  declare title?: any;
  declare description?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare duration_in_seconds?: any;
  declare content?: any;

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
