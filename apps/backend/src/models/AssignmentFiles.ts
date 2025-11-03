import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AssignmentFilesAttributes {
  pk: number;
  id: string;
  assignmentId: number;
  filePath: string;
  name: string;
}

export type AssignmentFilesPk = "pk";
export type AssignmentFilesId = AssignmentFiles[AssignmentFilesPk];
export type AssignmentFilesOptionalAttributes = "pk";
export type AssignmentFilesCreationAttributes = Optional<AssignmentFilesAttributes, AssignmentFilesOptionalAttributes>;

export class AssignmentFiles extends Model<AssignmentFilesAttributes, AssignmentFilesCreationAttributes> implements AssignmentFilesAttributes {
  pk!: number;
  id!: string;
  assignmentId!: number;
  filePath!: string;
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof AssignmentFiles {
    return AssignmentFiles.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    assignmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'assignment_id'
    },
    filePath: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'file_path'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'assignment_files',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assignment_files_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
