import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesVideosAttributes {
  id?: string;
  moduleId: string;
  url?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  durationInSeconds?: number;
  content?: string;
}

export type ModulesVideosCreationAttributes = Optional<ModulesVideosAttributes, 'id' | 'url' | 'title' | 'description' | 'deletedAt' | 'durationInSeconds' | 'content'>;

export class ModulesVideos extends Model<ModulesVideosAttributes, ModulesVideosCreationAttributes> implements ModulesVideosAttributes {
  declare id?: string;
  declare moduleId: string;
  declare url?: string;
  declare title?: string;
  declare description?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare durationInSeconds?: number;
  declare content?: string;

  public static initModel(sequelize: Sequelize): typeof ModulesVideos {
    ModulesVideos.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        moduleId: { type: DataTypes.UUID, allowNull: false,
            field: 'module_id'
        },
        url: { type: DataTypes.STRING, allowNull: true,
            field: 'url'
        },
        title: { type: DataTypes.STRING, allowNull: true,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        durationInSeconds: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_in_seconds'
        },
        content: { type: DataTypes.TEXT, allowNull: true,
            field: 'content'
        }
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
