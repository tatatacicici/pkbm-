import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PartnersProposalsAttributes {
  id?: number;
  uuid: string;
  partner_id: string;
  name: string;
  type: string;
  start_registration: Date;
  end_registration: Date;
  start_duration: Date;
  end_duration: Date;
  credits_count: number;
  location: string;
  description: string;
  optional_notes?: string;
  status: string;
  actioner_id?: string;
  actioned_at?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type PartnersProposalsCreationAttributes = Optional<PartnersProposalsAttributes, 'id' | 'optional_notes' | 'actioner_id' | 'actioned_at' | 'deleted_at'>;

export class PartnersProposals extends Model<PartnersProposalsAttributes, PartnersProposalsCreationAttributes> implements PartnersProposalsAttributes {
  declare id?: number;
  declare uuid: string;
  declare partner_id: string;
  declare name: string;
  declare type: string;
  declare start_registration: Date;
  declare end_registration: Date;
  declare start_duration: Date;
  declare end_duration: Date;
  declare credits_count: number;
  declare location: string;
  declare description: string;
  declare optional_notes?: string;
  declare status: string;
  declare actioner_id?: string;
  declare actioned_at?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof PartnersProposals {
    PartnersProposals.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        partner_id: { type: DataTypes.UUID, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        start_registration: { type: DataTypes.DATE, allowNull: false },
        end_registration: { type: DataTypes.DATE, allowNull: false },
        start_duration: { type: DataTypes.DATE, allowNull: false },
        end_duration: { type: DataTypes.DATE, allowNull: false },
        credits_count: { type: DataTypes.INTEGER, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        optional_notes: { type: DataTypes.TEXT, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: false },
        actioner_id: { type: DataTypes.UUID, allowNull: true },
        actioned_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
