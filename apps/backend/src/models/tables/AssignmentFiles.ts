import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentFilesAttributes {
  pk: number;
  id?: string;
  assignment_id: number;
  file_path: string;
  name: string;
}

export type AssignmentFilesCreationAttributes = Optional<AssignmentFilesAttributes, 'id'>;

export class AssignmentFiles extends Model<AssignmentFilesAttributes, AssignmentFilesCreationAttributes> implements AssignmentFilesAttributes {
  declare pk: number;
  declare id?: string;
  declare assignment_id: number;
  declare file_path: string;
  declare name: string;

  public static initModel(sequelize: Sequelize): typeof AssignmentFiles {
    AssignmentFiles.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        assignment_id: { type: DataTypes.INTEGER, allowNull: false },
        file_path: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false }
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
