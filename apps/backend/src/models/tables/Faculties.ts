import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface FacultiesAttributes {
  id?: string;
  name: string;
  thumbnail: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  code?: string;
}

export type FacultiesCreationAttributes = Optional<FacultiesAttributes, 'id' | 'deletedAt' | 'thumbnailId' | 'code'>;

export class Faculties extends Model<FacultiesAttributes, FacultiesCreationAttributes> implements FacultiesAttributes {
  declare id?: string;
  declare name: string;
  declare thumbnail: string;
  declare slug: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare thumbnailId?: number;
  declare code?: string;

  public static initModel(sequelize: Sequelize): typeof Faculties {
    Faculties.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: false,
            field: 'thumbnail'
        },
        slug: { type: DataTypes.STRING, allowNull: false,
            field: 'slug'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        thumbnailId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'thumbnail_id'
        },
        code: { type: DataTypes.STRING, allowNull: true,
            field: 'code'
        }
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
