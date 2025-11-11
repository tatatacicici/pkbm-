import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface BannerAttributes {
  id?: any;
  image?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type BannerCreationAttributes = Optional<BannerAttributes, 'id'>;

export class Banner extends Model<BannerAttributes, BannerCreationAttributes> implements BannerAttributes {
  declare id?: any;
  declare image?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Banner {
    Banner.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        image: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
