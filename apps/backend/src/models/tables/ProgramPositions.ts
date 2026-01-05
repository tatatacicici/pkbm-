import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgramPositionsAttributes {
  id?: number;
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

export type ProgramPositionsCreationAttributes = Optional<ProgramPositionsAttributes, 'id' | 'salary' | 'deletedAt'>;

export class ProgramPositions extends Model<ProgramPositionsAttributes, ProgramPositionsCreationAttributes> implements ProgramPositionsAttributes {
  declare id?: number;
  declare uuid: string;
  declare proposalId: number;
  declare partnerId: string;
  declare name: string;
  declare quota: number;
  declare activityType: string;
  declare requirement: string;
  declare salary?: number;
  declare location: string;
  declare locationCode: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare cycleId: number;

  public static initModel(sequelize: Sequelize): typeof ProgramPositions {
    ProgramPositions.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: false,
            field: 'uuid'
        },
        proposalId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'proposal_id'
        },
        partnerId: { type: DataTypes.UUID, allowNull: false,
            field: 'partner_id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        quota: { type: DataTypes.INTEGER, allowNull: false,
            field: 'quota'
        },
        activityType: { type: DataTypes.STRING, allowNull: false,
            field: 'activity_type'
        },
        requirement: { type: DataTypes.STRING, allowNull: false,
            field: 'requirement'
        },
        salary: { type: DataTypes.INTEGER, allowNull: true,
            field: 'salary'
        },
        location: { type: DataTypes.STRING, allowNull: false,
            field: 'location'
        },
        locationCode: { type: DataTypes.STRING, allowNull: false,
            field: 'location_code'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        cycleId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'cycle_id'
        }
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
