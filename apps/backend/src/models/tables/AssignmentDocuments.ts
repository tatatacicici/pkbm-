import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentDocumentsAttributes {
  id?: string;
  assignmentId: string;
  documentUrl: string;
  documentFilename: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  documentId?: number;
}

export type AssignmentDocumentsCreationAttributes = Optional<AssignmentDocumentsAttributes, 'id' | 'deletedAt' | 'documentId'>;

export class AssignmentDocuments extends Model<AssignmentDocumentsAttributes, AssignmentDocumentsCreationAttributes> implements AssignmentDocumentsAttributes {
  declare id?: string;
  declare assignmentId: string;
  declare documentUrl: string;
  declare documentFilename: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare documentId?: number;

  public static initModel(sequelize: Sequelize): typeof AssignmentDocuments {
    AssignmentDocuments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assignmentId: { type: DataTypes.UUID, allowNull: false,
            field: 'assignment_id'
        },
        documentUrl: { type: DataTypes.STRING, allowNull: false,
            field: 'document_url'
        },
        documentFilename: { type: DataTypes.STRING, allowNull: false,
            field: 'document_filename'
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
        documentId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'document_id'
        }
      },
      {
        sequelize,
        tableName: 'assignment_documents',
        timestamps: true,
        underscored: true,
      }
    );
    return AssignmentDocuments;
  }
}
