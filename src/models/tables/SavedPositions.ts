import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SavedPositionsAttributes {
  id?: number;
  student_id: string;
  position_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SavedPositionsCreationAttributes = Optional<SavedPositionsAttributes, 'id' | 'deleted_at'>;

export class SavedPositions extends Model<SavedPositionsAttributes, SavedPositionsCreationAttributes> implements SavedPositionsAttributes {
  declare id?: number;
  declare student_id: string;
  declare position_id: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SavedPositions {
    SavedPositions.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        position_id: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'saved_positions',
        timestamps: true,
        underscored: true,
      }
    );
    return SavedPositions;
  }
}
