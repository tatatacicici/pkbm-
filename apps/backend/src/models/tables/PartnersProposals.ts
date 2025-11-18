import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PartnersProposalsAttributes {
  id?: number;
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

export type PartnersProposalsCreationAttributes = Optional<PartnersProposalsAttributes, 'id' | 'optionalNotes' | 'actionerId' | 'actionedAt' | 'deletedAt'>;

export class PartnersProposals extends Model<PartnersProposalsAttributes, PartnersProposalsCreationAttributes> implements PartnersProposalsAttributes {
  declare id?: number;
  declare uuid: string;
  declare partnerId: string;
  declare name: string;
  declare type: string;
  declare startRegistration: Date;
  declare endRegistration: Date;
  declare startDuration: Date;
  declare endDuration: Date;
  declare creditsCount: number;
  declare location: string;
  declare description: string;
  declare optionalNotes?: string;
  declare status: string;
  declare actionerId?: string;
  declare actionedAt?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof PartnersProposals {
    PartnersProposals.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: false,
            field: 'uuid'
        },
        partnerId: { type: DataTypes.UUID, allowNull: false,
            field: 'partner_id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        startRegistration: { type: DataTypes.DATE, allowNull: false,
            field: 'start_registration'
        },
        endRegistration: { type: DataTypes.DATE, allowNull: false,
            field: 'end_registration'
        },
        startDuration: { type: DataTypes.DATE, allowNull: false,
            field: 'start_duration'
        },
        endDuration: { type: DataTypes.DATE, allowNull: false,
            field: 'end_duration'
        },
        creditsCount: { type: DataTypes.INTEGER, allowNull: false,
            field: 'credits_count'
        },
        location: { type: DataTypes.STRING, allowNull: false,
            field: 'location'
        },
        description: { type: DataTypes.TEXT, allowNull: false,
            field: 'description'
        },
        optionalNotes: { type: DataTypes.TEXT, allowNull: true,
            field: 'optional_notes'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        actionerId: { type: DataTypes.UUID, allowNull: true,
            field: 'actioner_id'
        },
        actionedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'actioned_at'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'partners_proposals',
        timestamps: true,
        underscored: true,
      }
    );
    return PartnersProposals;
  }
}
