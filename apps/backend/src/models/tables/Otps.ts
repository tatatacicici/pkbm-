import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface OtpsAttributes {
  id?: string;
  email: string;
  otp: string;
  otpType: string;
  expirationTime?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  token?: string;
}

export type OtpsCreationAttributes = Optional<OtpsAttributes, 'id' | 'expirationTime' | 'deletedAt' | 'token'>;

export class Otps extends Model<OtpsAttributes, OtpsCreationAttributes> implements OtpsAttributes {
  declare id?: string;
  declare email: string;
  declare otp: string;
  declare otpType: string;
  declare expirationTime?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare token?: string;

  public static initModel(sequelize: Sequelize): typeof Otps {
    Otps.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        email: { type: DataTypes.STRING, allowNull: false,
            field: 'email'
        },
        otp: { type: DataTypes.STRING, allowNull: false,
            field: 'otp'
        },
        otpType: { type: DataTypes.STRING, allowNull: false,
            field: 'otp_type'
        },
        expirationTime: { type: DataTypes.DATE, allowNull: true,
            field: 'expiration_time'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        token: { type: DataTypes.STRING, allowNull: true,
            field: 'token'
        }
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
