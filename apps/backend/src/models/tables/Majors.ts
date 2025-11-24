import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MajorsAttributes {
  id?: string;
  facultyId: string;
  name: string;
  degree: string;
  majorHeadId: string;
  thumbnail: string;
  description?: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  code?: string;
}

export type MajorsCreationAttributes = Optional<MajorsAttributes, 'id' | 'description' | 'deletedAt' | 'thumbnailId' | 'code'>;

export class Majors extends Model<MajorsAttributes, MajorsCreationAttributes> implements MajorsAttributes {
  declare id?: string;
  declare facultyId: string;
  declare name: string;
  declare degree: string;
  declare majorHeadId: string;
  declare thumbnail: string;
  declare description?: string;
  declare slug: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare thumbnailId?: number;
  declare code?: string;

  public static initModel(sequelize: Sequelize): typeof Majors {
    Majors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        facultyId: { type: DataTypes.UUID, allowNull: false,
            field: 'faculty_id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        degree: { type: DataTypes.STRING, allowNull: false,
            field: 'degree'
        },
        majorHeadId: { type: DataTypes.UUID, allowNull: false,
            field: 'major_head_id'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: false,
            field: 'thumbnail'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
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
        tableName: 'majors',
        timestamps: true,
        underscored: false,
      }
    );
    return Majors;
  }
}
