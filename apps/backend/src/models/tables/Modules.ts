import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesAttributes {
  id?: string;
  sessionId: string;
  documentId?: string;
  videoId?: string;
  title: string;
  description: string;
  durationSec?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ModulesCreationAttributes = Optional<ModulesAttributes, 'id' | 'documentId' | 'videoId' | 'durationSec' | 'deletedAt'>;

export class Modules extends Model<ModulesAttributes, ModulesCreationAttributes> implements ModulesAttributes {
  declare id?: string;
  declare sessionId: string;
  declare documentId?: string;
  declare videoId?: string;
  declare title: string;
  declare description: string;
  declare durationSec?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Modules {
    Modules.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        documentId: { type: DataTypes.STRING, allowNull: true,
            field: 'document_id'
        },
        videoId: { type: DataTypes.STRING, allowNull: true,
            field: 'video_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: false,
            field: 'description'
        },
        durationSec: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_sec'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'modules',
        timestamps: true,
        underscored: false,
      }
    );
    return Modules;
  }
}
