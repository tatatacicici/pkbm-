import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PartnersProposalsAttributes {
  id: number;
  uuid: string;
  partnerId: string;
  name: string;
  type: string;
  startRegistration: Date;
  endRegistration: Date;
  startDuration: Date;
  endDuration: Date;
  creditsCount: number;
  location: string;
  description: string;
  optionalNotes?: string;
  status: string;
  actionerId?: string;
  actionedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type PartnersProposalsPk = "id";
export type PartnersProposalsId = PartnersProposals[PartnersProposalsPk];
export type PartnersProposalsOptionalAttributes = "id" | "optionalNotes" | "actionerId" | "actionedAt" | "deletedAt";
export type PartnersProposalsCreationAttributes = Optional<PartnersProposalsAttributes, PartnersProposalsOptionalAttributes>;

export class PartnersProposals extends Model<PartnersProposalsAttributes, PartnersProposalsCreationAttributes> implements PartnersProposalsAttributes {
  id!: number;
  uuid!: string;
  partnerId!: string;
  name!: string;
  type!: string;
  startRegistration!: Date;
  endRegistration!: Date;
  startDuration!: Date;
  endDuration!: Date;
  creditsCount!: number;
  location!: string;
  description!: string;
  optionalNotes?: string;
  status!: string;
  actionerId?: string;
  actionedAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof PartnersProposals {
    return PartnersProposals.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    partnerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'partner_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startRegistration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_registration'
    },
    endRegistration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_registration'
    },
    startDuration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_duration'
    },
    endDuration: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_duration'
    },
    creditsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'credits_count'
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    optionalNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'optional_notes'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    actionerId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'actioner_id'
    },
    actionedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'actioned_at'
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
    tableName: 'partners_proposals',
    schema: 'public',
    timestamps: false
  });
  }
}
