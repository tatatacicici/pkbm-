import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DonationProofsAttributes {
  id?: any;
  full_name?: any;
  email?: any;
  phone_number?: any;
  amount?: any;
  proof_id?: any;
  proof_image?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type DonationProofsCreationAttributes = Optional<DonationProofsAttributes, 'id'>;

export class DonationProofs extends Model<DonationProofsAttributes, DonationProofsCreationAttributes> implements DonationProofsAttributes {
  declare id?: any;
  declare full_name?: any;
  declare email?: any;
  declare phone_number?: any;
  declare amount?: any;
  declare proof_id?: any;
  declare proof_image?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
