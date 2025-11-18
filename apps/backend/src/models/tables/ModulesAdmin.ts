import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesAdminAttributes {
  pk: number;
  id?: string;
  sessionId: string;
  title: string;
  description: string;
  documentId?: string;
  videoId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ModulesAdminCreationAttributes = Optional<ModulesAdminAttributes, 'id' | 'documentId' | 'videoId'>;

export class ModulesAdmin extends Model<ModulesAdminAttributes, ModulesAdminCreationAttributes> implements ModulesAdminAttributes {
  declare pk: number;
  declare id?: string;
  declare sessionId: string;
  declare title: string;
  declare description: string;
  declare documentId?: string;
  declare videoId?: string;
  declare createdAt: Date;
  declare updatedAt: Date;

  public static initModel(sequelize: Sequelize): typeof ModulesAdmin {
    ModulesAdmin.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
        },
        documentId: { type: DataTypes.STRING, allowNull: true,
            field: 'document_id'
        },
        videoId: { type: DataTypes.STRING, allowNull: true,
            field: 'video_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        }
      },
      {
        sequelize,
        tableName: 'modules_admin',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesAdmin;
  }
}
