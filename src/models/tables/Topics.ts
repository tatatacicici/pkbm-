import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TopicsAttributes {
  id?: any;
  name?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  slug?: any;
}

export type TopicsCreationAttributes = Optional<TopicsAttributes, 'id'>;

export class Topics extends Model<TopicsAttributes, TopicsCreationAttributes> implements TopicsAttributes {
  declare id?: any;
  declare name?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare slug?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Topics {
    Topics.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        slug: { type: DataTypes.STRING, allowNull: false }
      },
      {
        sequelize,
        tableName: 'topics',
        timestamps: true,
        underscored: false,
      }
    );
    return Topics;
  }
}
