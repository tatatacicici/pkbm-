import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionsAttributes {
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
}

export type PositionsCreationAttributes = Optional<PositionsAttributes, 'id' | 'salary'>;

export class Positions extends Model<PositionsAttributes, PositionsCreationAttributes> implements PositionsAttributes {
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

  public static initModel(sequelize: Sequelize): typeof Positions {
    Positions.init(
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
        }
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
