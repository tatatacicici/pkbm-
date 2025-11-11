import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface BannerAttributes {
  id?: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type BannerCreationAttributes = Optional<BannerAttributes, 'id' | 'deleted_at'>;

export class Banner extends Model<BannerAttributes, BannerCreationAttributes> implements BannerAttributes {
  declare id?: string;
  declare image: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
