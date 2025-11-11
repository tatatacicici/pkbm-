import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgramPositionsAttributes {
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
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  cycle_id: number;
}

export type ProgramPositionsCreationAttributes = Optional<ProgramPositionsAttributes, 'id' | 'salary' | 'deleted_at'>;

export class ProgramPositions extends Model<ProgramPositionsAttributes, ProgramPositionsCreationAttributes> implements ProgramPositionsAttributes {
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
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare cycle_id: number;

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
