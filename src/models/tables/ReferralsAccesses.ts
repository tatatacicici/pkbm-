import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsAccessesAttributes {
  id?: any;
  referral_id?: any;
  user_id?: any;
  useragent?: any;
  ip_address?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  is_valid?: any;
}

export type ReferralsAccessesCreationAttributes = Optional<ReferralsAccessesAttributes, 'id'>;

export class ReferralsAccesses extends Model<ReferralsAccessesAttributes, ReferralsAccessesCreationAttributes> implements ReferralsAccessesAttributes {
  declare id?: any;
  declare referral_id?: any;
  declare user_id?: any;
  declare useragent?: any;
  declare ip_address?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare is_valid?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ReferralsAccesses {
    ReferralsAccesses.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        referral_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: true },
        useragent: { type: DataTypes.STRING, allowNull: false },
        ip_address: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        is_valid: { type: DataTypes.BOOLEAN }
      },
      {
        sequelize,
        tableName: 'referrals_accesses',
        timestamps: true,
        underscored: true,
      }
    );
    return ReferralsAccesses;
  }
}
