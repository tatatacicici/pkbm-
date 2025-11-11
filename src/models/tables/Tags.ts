import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TagsAttributes {
  id?: string;
  tag: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  name?: string;
}

export type TagsCreationAttributes = Optional<TagsAttributes, 'id' | 'deleted_at' | 'name'>;

export class Tags extends Model<TagsAttributes, TagsCreationAttributes> implements TagsAttributes {
  declare id?: string;
  declare tag: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare name?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Tags {
    Tags.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        tag: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'tags',
        timestamps: true,
        underscored: false,
      }
    );
    return Tags;
  }
}
