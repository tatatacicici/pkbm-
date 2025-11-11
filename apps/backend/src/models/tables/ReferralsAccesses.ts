import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsAccessesAttributes {
  id?: string;
  referral_id: string;
  user_id?: string;
  useragent: string;
  ip_address: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_valid?: boolean;
}

export type ReferralsAccessesCreationAttributes = Optional<ReferralsAccessesAttributes, 'id' | 'user_id' | 'deleted_at' | 'is_valid'>;

export class ReferralsAccesses extends Model<ReferralsAccessesAttributes, ReferralsAccessesCreationAttributes> implements ReferralsAccessesAttributes {
  declare id?: string;
  declare referral_id: string;
  declare user_id?: string;
  declare useragent: string;
  declare ip_address: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare is_valid?: boolean;

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
