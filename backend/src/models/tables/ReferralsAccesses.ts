import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsAccessesAttributes {
  id?: string;
  referralId: string;
  userId?: string;
  useragent: string;
  ipAddress: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isValid?: boolean;
}

export type ReferralsAccessesCreationAttributes = Optional<ReferralsAccessesAttributes, 'id' | 'userId' | 'deletedAt' | 'isValid'>;

export class ReferralsAccesses extends Model<ReferralsAccessesAttributes, ReferralsAccessesCreationAttributes> implements ReferralsAccessesAttributes {
  declare id?: string;
  declare referralId: string;
  declare userId?: string;
  declare useragent: string;
  declare ipAddress: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare isValid?: boolean;

  public static initModel(sequelize: Sequelize): typeof ReferralsAccesses {
    ReferralsAccesses.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        referralId: { type: DataTypes.UUID, allowNull: false,
            field: 'referral_id'
        },
        userId: { type: DataTypes.UUID, allowNull: true,
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
        tableName: 'referrals_accesses',
        timestamps: true,
        underscored: true,
      }
    );
    return ReferralsAccesses;
  }
}
