import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgramPositionsAttributes {
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
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  cycle_id?: any;
}

export type ProgramPositionsCreationAttributes = Optional<ProgramPositionsAttributes, 'id'>;

export class ProgramPositions extends Model<ProgramPositionsAttributes, ProgramPositionsCreationAttributes> implements ProgramPositionsAttributes {
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
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare cycle_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ProgramPositions {
    ProgramPositions.init(
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
        location_code: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        cycle_id: { type: DataTypes.INTEGER, allowNull: false }
      },
      {
        sequelize,
        tableName: 'program_positions',
        timestamps: true,
        underscored: true,
      }
    );
    return ProgramPositions;
  }
}
