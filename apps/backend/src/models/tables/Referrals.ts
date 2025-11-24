import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReferralsAttributes {
  id?: string;
  userId: string;
  code: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  totalViews?: number;
  ipAddress: string;
}

export type ReferralsCreationAttributes = Optional<ReferralsAttributes, 'id' | 'deletedAt' | 'totalViews'>;

export class Referrals extends Model<ReferralsAttributes, ReferralsCreationAttributes> implements ReferralsAttributes {
  declare id?: string;
  declare userId: string;
  declare code: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare totalViews?: number;
  declare ipAddress: string;

  public static initModel(sequelize: Sequelize): typeof Referrals {
    Referrals.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        code: { type: DataTypes.STRING, allowNull: false,
            field: 'code'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
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
        totalViews: { type: DataTypes.INTEGER,
            field: 'total_views'
        },
        ipAddress: { type: DataTypes.STRING, allowNull: false,
            field: 'ip_address'
        }
      },
      {
        sequelize,
        tableName: 'referrals',
        timestamps: true,
        underscored: false,
      }
    );
    return Referrals;
  }
}
