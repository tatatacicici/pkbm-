import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PaymentTrasactionItemsAttributes {
  pk: number;
  id?: string;
  transactionId: number;
  detail: string;
  amount: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type PaymentTrasactionItemsCreationAttributes = Optional<PaymentTrasactionItemsAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class PaymentTrasactionItems extends Model<PaymentTrasactionItemsAttributes, PaymentTrasactionItemsCreationAttributes> implements PaymentTrasactionItemsAttributes {
  declare pk: number;
  declare id?: string;
  declare transactionId: number;
  declare detail: string;
  declare amount: number;
  declare quantity: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof PaymentTrasactionItems {
    PaymentTrasactionItems.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        transactionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'transaction_id'
        },
        detail: { type: DataTypes.STRING, allowNull: false,
            field: 'detail'
        },
        amount: { type: DataTypes.INTEGER, allowNull: false,
            field: 'amount'
        },
        quantity: { type: DataTypes.INTEGER, allowNull: false,
            field: 'quantity'
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
        tableName: 'payment_trasaction_items',
        timestamps: true,
        underscored: true,
      }
    );
    return PaymentTrasactionItems;
  }
}
