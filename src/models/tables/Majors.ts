import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MajorsAttributes {
  id?: string;
  faculty_id: string;
  name: string;
  degree: string;
  major_head_id: string;
  thumbnail: string;
  description?: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  thumbnail_id?: number;
  code?: string;
}

export type MajorsCreationAttributes = Optional<MajorsAttributes, 'id' | 'description' | 'deleted_at' | 'thumbnail_id' | 'code'>;

export class Majors extends Model<MajorsAttributes, MajorsCreationAttributes> implements MajorsAttributes {
  declare id?: string;
  declare faculty_id: string;
  declare name: string;
  declare degree: string;
  declare major_head_id: string;
  declare thumbnail: string;
  declare description?: string;
  declare slug: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare thumbnail_id?: number;
  declare code?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Majors {
    Majors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        faculty_id: { type: DataTypes.UUID, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        degree: { type: DataTypes.STRING, allowNull: false },
        major_head_id: { type: DataTypes.UUID, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        slug: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        thumbnail_id: { type: DataTypes.INTEGER, allowNull: true },
        code: { type: DataTypes.STRING, allowNull: true }
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
