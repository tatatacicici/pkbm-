import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesBooksAttributes {
  id?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesBooksCreationAttributes = Optional<GuidesBooksAttributes, 'id' | 'title' | 'description' | 'deletedAt'>;

export class GuidesBooks extends Model<GuidesBooksAttributes, GuidesBooksCreationAttributes> implements GuidesBooksAttributes {
  declare id?: string;
  declare title?: string;
  declare description?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesBooks {
    GuidesBooks.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.TEXT, allowNull: true,
            field: 'title'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
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
        tableName: 'guides_books',
        timestamps: true,
        underscored: true,
      }
    );
    return GuidesBooks;
  }
}
