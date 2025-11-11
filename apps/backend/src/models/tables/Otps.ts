import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface OtpsAttributes {
  id?: string;
  email: string;
  otp: string;
  otp_type: string;
  expiration_time?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  token?: string;
}

export type OtpsCreationAttributes = Optional<OtpsAttributes, 'id' | 'expiration_time' | 'deleted_at' | 'token'>;

export class Otps extends Model<OtpsAttributes, OtpsCreationAttributes> implements OtpsAttributes {
  declare id?: string;
  declare email: string;
  declare otp: string;
  declare otp_type: string;
  declare expiration_time?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare token?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Otps {
    Otps.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        email: { type: DataTypes.STRING, allowNull: false },
        otp: { type: DataTypes.STRING, allowNull: false },
        otp_type: { type: DataTypes.STRING, allowNull: false },
        expiration_time: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        token: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'otps',
        timestamps: true,
        underscored: false,
      }
    );
    return Otps;
  }
}
