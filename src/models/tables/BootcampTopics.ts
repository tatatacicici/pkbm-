import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface BootcampTopicsAttributes {
  id?: any;
  title?: any;
  description?: any;
  duration_weeks?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type BootcampTopicsCreationAttributes = Optional<BootcampTopicsAttributes, 'id'>;

export class BootcampTopics extends Model<BootcampTopicsAttributes, BootcampTopicsCreationAttributes> implements BootcampTopicsAttributes {
  declare id?: any;
  declare title?: any;
  declare description?: any;
  declare duration_weeks?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
