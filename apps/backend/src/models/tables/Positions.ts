import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionsAttributes {
  id?: number;
  uuid: string;
  proposal_id: number;
  partner_id: string;
  name: string;
  quota: number;
  activity_type: string;
  requirement: string;
  salary?: number;
  location: string;
  location_code: string;
}

export type PositionsCreationAttributes = Optional<PositionsAttributes, 'id' | 'salary'>;

export class Positions extends Model<PositionsAttributes, PositionsCreationAttributes> implements PositionsAttributes {
  declare id?: number;
  declare uuid: string;
  declare proposal_id: number;
  declare partner_id: string;
  declare name: string;
  declare quota: number;
  declare activity_type: string;
  declare requirement: string;
  declare salary?: number;
  declare location: string;
  declare location_code: string;

  public static initModel(sequelize: Sequelize): typeof Positions {
    Positions.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        proposal_id: { type: DataTypes.INTEGER, allowNull: false },
        partner_id: { type: DataTypes.UUID, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        quota: { type: DataTypes.INTEGER, allowNull: false },
        activity_type: { type: DataTypes.STRING, allowNull: false },
        requirement: { type: DataTypes.STRING, allowNull: false },
        salary: { type: DataTypes.INTEGER, allowNull: true },
        location: { type: DataTypes.STRING, allowNull: false },
        location_code: { type: DataTypes.STRING, allowNull: false }
      },
      {
        sequelize,
        tableName: 'positions',
        timestamps: false,
        underscored: false,
      }
    );
    return Positions;
  }
}
