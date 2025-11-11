import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TopicsAttributes {
  id?: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  slug: string;
}

export type TopicsCreationAttributes = Optional<TopicsAttributes, 'id' | 'deleted_at'>;

export class Topics extends Model<TopicsAttributes, TopicsCreationAttributes> implements TopicsAttributes {
  declare id?: string;
  declare name: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare slug: string;

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
