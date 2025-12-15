import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PaymentTransactionsAttributes {
  pk: number;
  id?: string;
  userId: string;
  totalItem: number;
  finalAmount: number;
  status: string;
  type: string;
  method: string;
  snapToken: string;
  snapRedirectUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type PaymentTransactionsCreationAttributes = Optional<PaymentTransactionsAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class PaymentTransactions extends Model<PaymentTransactionsAttributes, PaymentTransactionsCreationAttributes> implements PaymentTransactionsAttributes {
  declare pk: number;
  declare id?: string;
  declare userId: string;
  declare totalItem: number;
  declare finalAmount: number;
  declare status: string;
  declare type: string;
  declare method: string;
  declare snapToken: string;
  declare snapRedirectUrl: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof PaymentTransactions {
    PaymentTransactions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.STRING, allowNull: false,
            field: 'user_id'
        },
        totalItem: { type: DataTypes.INTEGER, allowNull: false,
            field: 'total_item'
        },
        finalAmount: { type: DataTypes.INTEGER, allowNull: false,
            field: 'final_amount'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        method: { type: DataTypes.STRING, allowNull: false,
            field: 'method'
        },
        snapToken: { type: DataTypes.STRING, allowNull: false,
            field: 'snap_token'
        },
        snapRedirectUrl: { type: DataTypes.STRING, allowNull: false,
            field: 'snap_redirect_url'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'payment_transactions',
        timestamps: true,
        underscored: true,
      }
    );
    return PaymentTransactions;
  }
}
