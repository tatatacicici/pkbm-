import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReferralsAccessesAttributes {
  id: string;
  referralId: string;
  userId?: string;
  useragent: string;
  ipAddress: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isValid: boolean;
}

export type ReferralsAccessesPk = "id";
export type ReferralsAccessesId = ReferralsAccesses[ReferralsAccessesPk];
export type ReferralsAccessesOptionalAttributes = "userId" | "deletedAt";
export type ReferralsAccessesCreationAttributes = Optional<ReferralsAccessesAttributes, ReferralsAccessesOptionalAttributes>;

export class ReferralsAccesses extends Model<ReferralsAccessesAttributes, ReferralsAccessesCreationAttributes> implements ReferralsAccessesAttributes {
  id!: string;
  referralId!: string;
  userId?: string;
  useragent!: string;
  ipAddress!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  isValid!: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof ReferralsAccesses {
    return ReferralsAccesses.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    referralId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'referral_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'user_id'
    },
    useragent: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ipAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'ip_address'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    isValid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_valid'
    }
  }, {
    sequelize,
    tableName: 'referrals_accesses',
    schema: 'public',
    timestamps: false
  });
  }
}
