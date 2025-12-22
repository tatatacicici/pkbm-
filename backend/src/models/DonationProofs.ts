import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DonationProofsAttributes {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  amount: string;
  status: "PENDING" | "APPROVED" | "FRAUD";
  proofId: number;
  proofImage: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DonationProofsPk = "id";
export type DonationProofsId = DonationProofs[DonationProofsPk];
export type DonationProofsOptionalAttributes = "status" | "deletedAt";
export type DonationProofsCreationAttributes = Optional<DonationProofsAttributes, DonationProofsOptionalAttributes>;

export class DonationProofs extends Model<DonationProofsAttributes, DonationProofsCreationAttributes> implements DonationProofsAttributes {
  id!: string;
  fullName!: string;
  email!: string;
  phoneNumber!: string;
  amount!: string;
  status!: "PENDING" | "APPROVED" | "FRAUD";
  proofId!: number;
  proofImage!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof DonationProofs {
    return DonationProofs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'phone_number'
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("PENDING","APPROVED","FRAUD"),
      allowNull: false,
      defaultValue: "PENDING"
    },
    proofId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'proof_id'
    },
    proofImage: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'proof_image'
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
    }
  }, {
    sequelize,
    tableName: 'donation_proofs',
    schema: 'public',
    timestamps: false
  });
  }
}
