import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AdministrationsAttributes {
  id: string;
  userId: string;
  type: string;
  status: string;
  actionBy?: string;
  createdAt: Date;
  updatedAt: Date;
  reason?: string;
  deletedAt?: Date;
  category?: string;
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  approvedBy?: string;
  approvedAt?: Date;
}

export type AdministrationsPk = "id";
export type AdministrationsId = Administrations[AdministrationsPk];
export type AdministrationsOptionalAttributes = "actionBy" | "reason" | "deletedAt" | "category" | "approvalStatus" | "approvedBy" | "approvedAt";
export type AdministrationsCreationAttributes = Optional<AdministrationsAttributes, AdministrationsOptionalAttributes>;

export class Administrations extends Model<AdministrationsAttributes, AdministrationsCreationAttributes> implements AdministrationsAttributes {
  id!: string;
  userId!: string;
  type!: string;
  status!: string;
  actionBy?: string;
  createdAt!: Date;
  updatedAt!: Date;
  reason?: string;
  deletedAt?: Date;
  category?: string;
  approvalStatus!: "PENDING" | "APPROVED" | "REJECTED";
  approvedBy?: string;
  approvedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Administrations {
    return Administrations.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    actionBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'action_by'
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
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    approvalStatus: {
      type: DataTypes.ENUM("PENDING","APPROVED","REJECTED"),
      allowNull: false,
      defaultValue: "PENDING",
      field: 'approval_status'
    },
    approvedBy: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'approved_by'
    },
    approvedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'approved_at'
    }
  }, {
    sequelize,
    tableName: 'administrations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "administrations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
