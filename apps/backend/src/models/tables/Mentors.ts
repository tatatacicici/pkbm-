import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MentorsAttributes {
  id?: string;
  user_id: string;
  partner_id: string;
  nik: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type MentorsCreationAttributes = Optional<MentorsAttributes, 'id' | 'deleted_at'>;

export class Mentors extends Model<MentorsAttributes, MentorsCreationAttributes> implements MentorsAttributes {
  declare id?: string;
  declare user_id: string;
  declare partner_id: string;
  declare nik: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Mentors {
    Mentors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        partner_id: { type: DataTypes.UUID, allowNull: false },
        nik: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'mentors',
        timestamps: true,
        underscored: false,
      }
    );
    return Mentors;
  }
}
