import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsAttributes {
  id?: string;
  user_id: string;
  code: string;
  type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  total_views?: number;
  ip_address: string;
}

export type ReferralsCreationAttributes = Optional<ReferralsAttributes, 'id' | 'deleted_at' | 'total_views'>;

export class Referrals extends Model<ReferralsAttributes, ReferralsCreationAttributes> implements ReferralsAttributes {
  declare id?: string;
  declare user_id: string;
  declare code: string;
  declare type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare total_views?: number;
  declare ip_address: string;

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
