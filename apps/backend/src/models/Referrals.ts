import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReferralsAttributes {
  id: string;
  userId: string;
  code: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  totalViews: number;
  ipAddress: string;
}

export type ReferralsPk = "id";
export type ReferralsId = Referrals[ReferralsPk];
export type ReferralsOptionalAttributes = "deletedAt" | "totalViews";
export type ReferralsCreationAttributes = Optional<ReferralsAttributes, ReferralsOptionalAttributes>;

export class Referrals extends Model<ReferralsAttributes, ReferralsCreationAttributes> implements ReferralsAttributes {
  id!: string;
  userId!: string;
  code!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  totalViews!: number;
  ipAddress!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Referrals {
    return Referrals.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    totalViews: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'total_views'
    },
    ipAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'ip_address'
    }
  }, {
    sequelize,
    tableName: 'referrals',
    schema: 'public',
    timestamps: false
  });
  }
}
