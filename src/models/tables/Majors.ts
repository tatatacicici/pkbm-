import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MajorsAttributes {
  id?: any;
  faculty_id?: any;
  name?: any;
  degree?: any;
  major_head_id?: any;
  thumbnail?: any;
  description?: any;
  slug?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  thumbnail_id?: any;
  code?: any;
}

export type MajorsCreationAttributes = Optional<MajorsAttributes, 'id'>;

export class Majors extends Model<MajorsAttributes, MajorsCreationAttributes> implements MajorsAttributes {
  declare id?: any;
  declare faculty_id?: any;
  declare name?: any;
  declare degree?: any;
  declare major_head_id?: any;
  declare thumbnail?: any;
  declare description?: any;
  declare slug?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare thumbnail_id?: any;
  declare code?: any;

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
