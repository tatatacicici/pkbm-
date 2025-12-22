import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PositionsAttributes {
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
}

export type PositionsPk = "id";
export type PositionsId = Positions[PositionsPk];
export type PositionsOptionalAttributes = "id" | "salary";
export type PositionsCreationAttributes = Optional<PositionsAttributes, PositionsOptionalAttributes>;

export class Positions extends Model<PositionsAttributes, PositionsCreationAttributes> implements PositionsAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof Positions {
    return Positions.init({
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
    }
  }, {
    sequelize,
    tableName: 'positions',
    schema: 'public',
    timestamps: false
  });
  }
}
