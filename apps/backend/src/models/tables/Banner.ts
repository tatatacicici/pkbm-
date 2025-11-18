import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface BannerAttributes {
  id?: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type BannerCreationAttributes = Optional<BannerAttributes, 'id' | 'deletedAt'>;

export class Banner extends Model<BannerAttributes, BannerCreationAttributes> implements BannerAttributes {
  declare id?: string;
  declare image: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Banner {
    Banner.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        image: { type: DataTypes.STRING, allowNull: false,
            field: 'image'
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
        tableName: 'banner',
        timestamps: true,
        underscored: false,
      }
    );
    return Banner;
  }
}
