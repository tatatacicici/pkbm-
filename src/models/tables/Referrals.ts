import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsAttributes {
  id?: any;
  user_id?: any;
  code?: any;
  type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  total_views?: any;
  ip_address?: any;
}

export type ReferralsCreationAttributes = Optional<ReferralsAttributes, 'id'>;

export class Referrals extends Model<ReferralsAttributes, ReferralsCreationAttributes> implements ReferralsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare code?: any;
  declare type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare total_views?: any;
  declare ip_address?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Referrals {
    Referrals.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        code: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        total_views: { type: DataTypes.INTEGER },
        ip_address: { type: DataTypes.STRING, allowNull: false }
      },
      {
        sequelize,
        tableName: 'referrals',
        timestamps: true,
        underscored: false,
      }
    );
    return Referrals;
  }
}
