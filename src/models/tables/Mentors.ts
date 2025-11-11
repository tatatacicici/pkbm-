import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MentorsAttributes {
  id?: any;
  user_id?: any;
  partner_id?: any;
  nik?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type MentorsCreationAttributes = Optional<MentorsAttributes, 'id'>;

export class Mentors extends Model<MentorsAttributes, MentorsCreationAttributes> implements MentorsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare partner_id?: any;
  declare nik?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
