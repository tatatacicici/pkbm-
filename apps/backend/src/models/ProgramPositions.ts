import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProgramPositionsAttributes {
  id: number;
  uuid: string;
  proposalId: number;
  partnerId: string;
  name: string;
  quota: number;
  activityType: string;
  requirement: string;
  salary?: number;
  location: string;
  locationCode: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  cycleId: number;
}

export type ProgramPositionsPk = "id";
export type ProgramPositionsId = ProgramPositions[ProgramPositionsPk];
export type ProgramPositionsOptionalAttributes = "id" | "salary" | "deletedAt";
export type ProgramPositionsCreationAttributes = Optional<ProgramPositionsAttributes, ProgramPositionsOptionalAttributes>;

export class ProgramPositions extends Model<ProgramPositionsAttributes, ProgramPositionsCreationAttributes> implements ProgramPositionsAttributes {
  id!: number;
  uuid!: string;
  proposalId!: number;
  partnerId!: string;
  name!: string;
  quota!: number;
  activityType!: string;
  requirement!: string;
  salary?: number;
  location!: string;
  locationCode!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  cycleId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProgramPositions {
    return ProgramPositions.init({
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
    proposalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'proposal_id'
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
    quota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activityType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'activity_type'
    },
    requirement: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    locationCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'location_code'
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
    },
    cycleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cycle_id'
    }
  }, {
    sequelize,
    tableName: 'program_positions',
    schema: 'public',
    timestamps: false
  });
  }
}
