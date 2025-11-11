import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesDictionariesAttributes {
  id?: string;
  title?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GuidesDictionariesCreationAttributes = Optional<GuidesDictionariesAttributes, 'id' | 'title' | 'description' | 'deleted_at'>;

export class GuidesDictionaries extends Model<GuidesDictionariesAttributes, GuidesDictionariesCreationAttributes> implements GuidesDictionariesAttributes {
  declare id?: string;
  declare title?: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesDictionaries {
    GuidesDictionaries.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'guides_dictionaries',
        timestamps: true,
        underscored: true,
      }
    );
    return GuidesDictionaries;
  }
}
