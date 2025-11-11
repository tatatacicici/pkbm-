import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface BootcampTopicsAttributes {
  id?: string;
  title: string;
  description?: string;
  duration_weeks?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export type BootcampTopicsCreationAttributes = Optional<BootcampTopicsAttributes, 'id' | 'description' | 'duration_weeks' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class BootcampTopics extends Model<BootcampTopicsAttributes, BootcampTopicsCreationAttributes> implements BootcampTopicsAttributes {
  declare id?: string;
  declare title: string;
  declare description?: string;
  declare duration_weeks?: number;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof BootcampTopics {
    BootcampTopics.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        duration_weeks: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'bootcamp_topics',
        timestamps: true,
        underscored: true,
      }
    );
    return BootcampTopics;
  }
}
