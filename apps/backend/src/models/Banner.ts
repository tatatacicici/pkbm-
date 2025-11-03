import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface BannerAttributes {
  id: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type BannerPk = "id";
export type BannerId = Banner[BannerPk];
export type BannerOptionalAttributes = "deletedAt";
export type BannerCreationAttributes = Optional<BannerAttributes, BannerOptionalAttributes>;

export class Banner extends Model<BannerAttributes, BannerCreationAttributes> implements BannerAttributes {
  id!: string;
  image!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Banner {
    return Banner.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'banner',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "banner_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
