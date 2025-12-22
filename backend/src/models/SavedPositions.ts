import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SavedPositionsAttributes {
  id: number;
  studentId: string;
  positionId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SavedPositionsPk = "id";
export type SavedPositionsId = SavedPositions[SavedPositionsPk];
export type SavedPositionsOptionalAttributes = "id" | "deletedAt";
export type SavedPositionsCreationAttributes = Optional<SavedPositionsAttributes, SavedPositionsOptionalAttributes>;

export class SavedPositions extends Model<SavedPositionsAttributes, SavedPositionsCreationAttributes> implements SavedPositionsAttributes {
  id!: number;
  studentId!: string;
  positionId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SavedPositions {
    return SavedPositions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'position_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'saved_positions',
    schema: 'public',
    timestamps: false
  });
  }
}
