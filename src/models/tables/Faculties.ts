import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface FacultiesAttributes {
  id?: any;
  name?: any;
  thumbnail?: any;
  slug?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  thumbnail_id?: any;
  code?: any;
}

export type FacultiesCreationAttributes = Optional<FacultiesAttributes, 'id'>;

export class Faculties extends Model<FacultiesAttributes, FacultiesCreationAttributes> implements FacultiesAttributes {
  declare id?: any;
  declare name?: any;
  declare thumbnail?: any;
  declare slug?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare thumbnail_id?: any;
  declare code?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Faculties {
    Faculties.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
        slug: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        thumbnail_id: { type: DataTypes.INTEGER, allowNull: true },
        code: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'faculties',
        timestamps: true,
        underscored: false,
      }
    );
    return Faculties;
  }
}
