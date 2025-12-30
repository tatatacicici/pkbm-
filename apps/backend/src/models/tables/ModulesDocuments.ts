import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesDocumentsAttributes {
  id?: string;
  documentFile?: string;
  moduleId: string;
  title: string;
  durationInSeconds?: number;
  documentId?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  content?: string;
}

export type ModulesDocumentsCreationAttributes = Optional<ModulesDocumentsAttributes, 'id' | 'documentFile' | 'durationInSeconds' | 'documentId' | 'deletedAt' | 'content'>;

export class ModulesDocuments extends Model<ModulesDocumentsAttributes, ModulesDocumentsCreationAttributes> implements ModulesDocumentsAttributes {
  declare id?: string;
  declare documentFile?: string;
  declare moduleId: string;
  declare title: string;
  declare durationInSeconds?: number;
  declare documentId?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare content?: string;

  public static initModel(sequelize: Sequelize): typeof ModulesDocuments {
    ModulesDocuments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        documentFile: { type: DataTypes.STRING, allowNull: true,
            field: 'document_file'
        },
        moduleId: { type: DataTypes.UUID, allowNull: false,
            field: 'module_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        durationInSeconds: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_in_seconds'
        },
        documentId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'document_id'
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
        content: { type: DataTypes.TEXT, allowNull: true,
            field: 'content'
        }
      },
      {
        sequelize,
        tableName: 'modules_documents',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesDocuments;
  }
}
