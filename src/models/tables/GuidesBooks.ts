import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesBooksAttributes {
  id?: string;
  title?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GuidesBooksCreationAttributes = Optional<GuidesBooksAttributes, 'id' | 'title' | 'description' | 'deleted_at'>;

export class GuidesBooks extends Model<GuidesBooksAttributes, GuidesBooksCreationAttributes> implements GuidesBooksAttributes {
  declare id?: string;
  declare title?: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesBooks {
    GuidesBooks.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.TEXT, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
