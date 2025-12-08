import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesDictionariesAttributes {
  id?: string;
  title?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesDictionariesCreationAttributes = Optional<GuidesDictionariesAttributes, 'id' | 'title' | 'description' | 'deletedAt'>;

export class GuidesDictionaries extends Model<GuidesDictionariesAttributes, GuidesDictionariesCreationAttributes> implements GuidesDictionariesAttributes {
  declare id?: string;
  declare title?: string;
  declare description?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesDictionaries {
    GuidesDictionaries.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: true,
            field: 'title'
        },
        description: { type: DataTypes.STRING, allowNull: true,
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
        tableName: 'guides_dictionaries',
        timestamps: true,
        underscored: true,
      }
    );
    return GuidesDictionaries;
  }
}
