import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TagsAttributes {
  id?: any;
  tag?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  name?: any;
}

export type TagsCreationAttributes = Optional<TagsAttributes, 'id'>;

export class Tags extends Model<TagsAttributes, TagsCreationAttributes> implements TagsAttributes {
  declare id?: any;
  declare tag?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare name?: any;

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
