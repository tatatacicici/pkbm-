import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface OtpsAttributes {
  id?: any;
  email?: any;
  otp?: any;
  otp_type?: any;
  expiration_time?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  token?: any;
}

export type OtpsCreationAttributes = Optional<OtpsAttributes, 'id'>;

export class Otps extends Model<OtpsAttributes, OtpsCreationAttributes> implements OtpsAttributes {
  declare id?: any;
  declare email?: any;
  declare otp?: any;
  declare otp_type?: any;
  declare expiration_time?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare token?: any;

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
