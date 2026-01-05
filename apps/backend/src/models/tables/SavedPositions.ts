import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SavedPositionsAttributes {
  id?: number;
  studentId: string;
  positionId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SavedPositionsCreationAttributes = Optional<SavedPositionsAttributes, 'id' | 'deletedAt'>;

export class SavedPositions extends Model<SavedPositionsAttributes, SavedPositionsCreationAttributes> implements SavedPositionsAttributes {
  declare id?: number;
  declare studentId: string;
  declare positionId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SavedPositions {
    SavedPositions.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        positionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'position_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
