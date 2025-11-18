import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsRegistrationsAttributes {
  id?: string;
  referralId: string;
  userId: string;
  useragent: string;
  ipAddress: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isValid?: boolean;
}

export type ReferralsRegistrationsCreationAttributes = Optional<ReferralsRegistrationsAttributes, 'id' | 'deletedAt' | 'isValid'>;

export class ReferralsRegistrations extends Model<ReferralsRegistrationsAttributes, ReferralsRegistrationsCreationAttributes> implements ReferralsRegistrationsAttributes {
  declare id?: string;
  declare referralId: string;
  declare userId: string;
  declare useragent: string;
  declare ipAddress: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare isValid?: boolean;

  public static initModel(sequelize: Sequelize): typeof ReferralsRegistrations {
    ReferralsRegistrations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        referralId: { type: DataTypes.UUID, allowNull: false,
            field: 'referral_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        useragent: { type: DataTypes.STRING, allowNull: false,
            field: 'useragent'
        },
        ipAddress: { type: DataTypes.STRING, allowNull: false,
            field: 'ip_address'
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
        isValid: { type: DataTypes.BOOLEAN,
            field: 'is_valid'
        }
      },
      {
        sequelize,
        tableName: 'referrals_registrations',
        timestamps: true,
        underscored: true,
      }
    );
    return ReferralsRegistrations;
  }
}
