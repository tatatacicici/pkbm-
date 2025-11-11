import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesDictionariesAttributes {
  id?: any;
  title?: any;
  description?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type GuidesDictionariesCreationAttributes = Optional<GuidesDictionariesAttributes, 'id'>;

export class GuidesDictionaries extends Model<GuidesDictionariesAttributes, GuidesDictionariesCreationAttributes> implements GuidesDictionariesAttributes {
  declare id?: any;
  declare title?: any;
  declare description?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
