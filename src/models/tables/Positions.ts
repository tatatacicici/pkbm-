import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionsAttributes {
  id?: any;
  uuid?: any;
  proposal_id?: any;
  partner_id?: any;
  name?: any;
  quota?: any;
  activity_type?: any;
  requirement?: any;
  salary?: any;
  location?: any;
  location_code?: any;
}

export type PositionsCreationAttributes = Optional<PositionsAttributes, 'id'>;

export class Positions extends Model<PositionsAttributes, PositionsCreationAttributes> implements PositionsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare proposal_id?: any;
  declare partner_id?: any;
  declare name?: any;
  declare quota?: any;
  declare activity_type?: any;
  declare requirement?: any;
  declare salary?: any;
  declare location?: any;
  declare location_code?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
