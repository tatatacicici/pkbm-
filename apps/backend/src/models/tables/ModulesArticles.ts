import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesArticlesAttributes {
  id?: string;
  title?: string;
  content?: string;
  moduleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  url?: string;
  durationInSeconds?: number;
  documentId?: number;
  documentFilename?: string;
}

export type ModulesArticlesCreationAttributes = Optional<ModulesArticlesAttributes, 'id' | 'title' | 'content' | 'deletedAt' | 'url' | 'durationInSeconds' | 'documentId' | 'documentFilename'>;

export class ModulesArticles extends Model<ModulesArticlesAttributes, ModulesArticlesCreationAttributes> implements ModulesArticlesAttributes {
  declare id?: string;
  declare title?: string;
  declare content?: string;
  declare moduleId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare url?: string;
  declare durationInSeconds?: number;
  declare documentId?: number;
  declare documentFilename?: string;

  public static initModel(sequelize: Sequelize): typeof ModulesArticles {
    ModulesArticles.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: true,
            field: 'title'
        },
        content: { type: DataTypes.TEXT, allowNull: true,
            field: 'content'
        },
        moduleId: { type: DataTypes.UUID, allowNull: false,
            field: 'module_id'
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
        url: { type: DataTypes.TEXT, allowNull: true,
            field: 'url'
        },
        durationInSeconds: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_in_seconds'
        },
        documentId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'document_id'
        },
        documentFilename: { type: DataTypes.STRING, allowNull: true,
            field: 'document_filename'
        }
      },
      {
        sequelize,
        tableName: 'modules_articles',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesArticles;
  }
}
