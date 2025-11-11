import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentFilesAttributes {
  pk?: any;
  id?: any;
  assignment_id?: any;
  file_path?: any;
  name?: any;
}

export type AssignmentFilesCreationAttributes = Optional<AssignmentFilesAttributes, 'id'>;

export class AssignmentFiles extends Model<AssignmentFilesAttributes, AssignmentFilesCreationAttributes> implements AssignmentFilesAttributes {
  declare pk?: any;
  declare id?: any;
  declare assignment_id?: any;
  declare file_path?: any;
  declare name?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
