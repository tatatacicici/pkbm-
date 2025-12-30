import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesJournalsAttributes {
  id?: string;
  title?: string;
  content?: string;
  url?: string;
  moduleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  durationInSeconds?: number;
  documentId?: number;
  documentFilename?: string;
}

export type ModulesJournalsCreationAttributes = Optional<ModulesJournalsAttributes, 'id' | 'title' | 'content' | 'url' | 'deletedAt' | 'durationInSeconds' | 'documentId' | 'documentFilename'>;

export class ModulesJournals extends Model<ModulesJournalsAttributes, ModulesJournalsCreationAttributes> implements ModulesJournalsAttributes {
  declare id?: string;
  declare title?: string;
  declare content?: string;
  declare url?: string;
  declare moduleId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare durationInSeconds?: number;
  declare documentId?: number;
  declare documentFilename?: string;

  public static initModel(sequelize: Sequelize): typeof ModulesJournals {
    ModulesJournals.init(
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
        url: { type: DataTypes.TEXT, allowNull: true,
            field: 'url'
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
        tableName: 'modules_journals',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesJournals;
  }
}
