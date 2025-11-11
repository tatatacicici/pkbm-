import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DictionarysAttributes {
  id?: string;
  url?: string;
  title?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DictionarysCreationAttributes = Optional<DictionarysAttributes, 'id' | 'url' | 'title' | 'description' | 'deleted_at'>;

export class Dictionarys extends Model<DictionarysAttributes, DictionarysCreationAttributes> implements DictionarysAttributes {
  declare id?: string;
  declare url?: string;
  declare title?: string;
  declare description?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Dictionarys {
    Dictionarys.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        url: { type: DataTypes.STRING, allowNull: true },
        title: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'dictionarys',
        timestamps: true,
        underscored: false,
      }
    );
    return Dictionarys;
  }
}
