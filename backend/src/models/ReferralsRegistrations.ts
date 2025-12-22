import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReferralsRegistrationsAttributes {
  id: string;
  referralId: string;
  userId: string;
  useragent: string;
  ipAddress: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isValid: boolean;
}

export type ReferralsRegistrationsPk = "id";
export type ReferralsRegistrationsId = ReferralsRegistrations[ReferralsRegistrationsPk];
export type ReferralsRegistrationsOptionalAttributes = "deletedAt" | "isValid";
export type ReferralsRegistrationsCreationAttributes = Optional<ReferralsRegistrationsAttributes, ReferralsRegistrationsOptionalAttributes>;

export class ReferralsRegistrations extends Model<ReferralsRegistrationsAttributes, ReferralsRegistrationsCreationAttributes> implements ReferralsRegistrationsAttributes {
  id!: string;
  referralId!: string;
  userId!: string;
  useragent!: string;
  ipAddress!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  isValid!: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof ReferralsRegistrations {
    return ReferralsRegistrations.init({
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
      allowNull: false,
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
      defaultValue: true,
      field: 'is_valid'
    }
  }, {
    sequelize,
    tableName: 'referrals_registrations',
    schema: 'public',
    timestamps: false
  });
  }
}
