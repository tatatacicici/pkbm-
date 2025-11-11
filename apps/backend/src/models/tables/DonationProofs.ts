import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DonationProofsAttributes {
  id?: string;
  full_name: string;
  email: string;
  phone_number: string;
  amount: string;
  proof_id: number;
  proof_image: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DonationProofsCreationAttributes = Optional<DonationProofsAttributes, 'id' | 'deleted_at'>;

export class DonationProofs extends Model<DonationProofsAttributes, DonationProofsCreationAttributes> implements DonationProofsAttributes {
  declare id?: string;
  declare full_name: string;
  declare email: string;
  declare phone_number: string;
  declare amount: string;
  declare proof_id: number;
  declare proof_image: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DonationProofs {
    DonationProofs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        full_name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        amount: { type: DataTypes.STRING, allowNull: false },
        proof_id: { type: DataTypes.INTEGER, allowNull: false },
        proof_image: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
