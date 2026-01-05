import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TagsAttributes {
  id?: string;
  tag: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  name?: string;
}

export type TagsCreationAttributes = Optional<TagsAttributes, 'id' | 'deletedAt' | 'name'>;

export class Tags extends Model<TagsAttributes, TagsCreationAttributes> implements TagsAttributes {
  declare id?: string;
  declare tag: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare name?: string;

  public static initModel(sequelize: Sequelize): typeof Tags {
    Tags.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        tag: { type: DataTypes.STRING, allowNull: false,
            field: 'tag'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        name: { type: DataTypes.STRING, allowNull: true,
            field: 'name'
        }
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
