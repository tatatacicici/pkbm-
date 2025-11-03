import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface OtpsAttributes {
  id: string;
  email: string;
  otp: string;
  otpType: string;
  expirationTime?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  token?: string;
}

export type OtpsPk = "id";
export type OtpsId = Otps[OtpsPk];
export type OtpsOptionalAttributes = "expirationTime" | "deletedAt" | "token";
export type OtpsCreationAttributes = Optional<OtpsAttributes, OtpsOptionalAttributes>;

export class Otps extends Model<OtpsAttributes, OtpsCreationAttributes> implements OtpsAttributes {
  id!: string;
  email!: string;
  otp!: string;
  otpType!: string;
  expirationTime?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  token?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Otps {
    return Otps.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    otp: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    otpType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'otp_type'
    },
    expirationTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'expiration_time'
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
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'otps',
    schema: 'public',
    timestamps: false
  });
  }
}
