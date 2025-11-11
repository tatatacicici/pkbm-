import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface FacultiesAttributes {
  id?: string;
  name: string;
  thumbnail: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  thumbnail_id?: number;
  code?: string;
}

export type FacultiesCreationAttributes = Optional<FacultiesAttributes, 'id' | 'deleted_at' | 'thumbnail_id' | 'code'>;

export class Faculties extends Model<FacultiesAttributes, FacultiesCreationAttributes> implements FacultiesAttributes {
  declare id?: string;
  declare name: string;
  declare thumbnail: string;
  declare slug: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare thumbnail_id?: number;
  declare code?: string;

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
