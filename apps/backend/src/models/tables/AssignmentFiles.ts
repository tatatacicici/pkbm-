import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentFilesAttributes {
  pk: number;
  id?: string;
  assignmentId: number;
  filePath: string;
  name: string;
}

export type AssignmentFilesCreationAttributes = Optional<AssignmentFilesAttributes, 'id'>;

export class AssignmentFiles extends Model<AssignmentFilesAttributes, AssignmentFilesCreationAttributes> implements AssignmentFilesAttributes {
  declare pk: number;
  declare id?: string;
  declare assignmentId: number;
  declare filePath: string;
  declare name: string;

  public static initModel(sequelize: Sequelize): typeof AssignmentFiles {
    AssignmentFiles.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assignmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assignment_id'
        },
        filePath: { type: DataTypes.STRING, allowNull: false,
            field: 'file_path'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        }
      },
      {
        sequelize,
        tableName: 'assignment_files',
        timestamps: false,
        underscored: true,
      }
    );
    return AssignmentFiles;
  }
}
