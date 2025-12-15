import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DonationProofsAttributes {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  amount: string;
  proofId: number;
  proofImage: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DonationProofsCreationAttributes = Optional<DonationProofsAttributes, 'id' | 'deletedAt'>;

export class DonationProofs extends Model<DonationProofsAttributes, DonationProofsCreationAttributes> implements DonationProofsAttributes {
  declare id?: string;
  declare fullName: string;
  declare email: string;
  declare phoneNumber: string;
  declare amount: string;
  declare proofId: number;
  declare proofImage: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DonationProofs {
    DonationProofs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        fullName: { type: DataTypes.STRING, allowNull: false,
            field: 'full_name'
        },
        email: { type: DataTypes.STRING, allowNull: false,
            field: 'email'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'phone_number'
        },
        amount: { type: DataTypes.STRING, allowNull: false,
            field: 'amount'
        },
        proofId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'proof_id'
        },
        proofImage: { type: DataTypes.STRING, allowNull: false,
            field: 'proof_image'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'donation_proofs',
        timestamps: true,
        underscored: true,
      }
    );
    return DonationProofs;
  }
}
