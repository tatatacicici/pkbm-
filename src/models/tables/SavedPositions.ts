import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SavedPositionsAttributes {
  id?: any;
  student_id?: any;
  position_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SavedPositionsCreationAttributes = Optional<SavedPositionsAttributes, 'id'>;

export class SavedPositions extends Model<SavedPositionsAttributes, SavedPositionsCreationAttributes> implements SavedPositionsAttributes {
  declare id?: any;
  declare student_id?: any;
  declare position_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
