import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PartnersProposalsAttributes {
  id?: any;
  uuid?: any;
  partner_id?: any;
  name?: any;
  type?: any;
  start_registration?: any;
  end_registration?: any;
  start_duration?: any;
  end_duration?: any;
  credits_count?: any;
  location?: any;
  description?: any;
  optional_notes?: any;
  status?: any;
  actioner_id?: any;
  actioned_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type PartnersProposalsCreationAttributes = Optional<PartnersProposalsAttributes, 'id'>;

export class PartnersProposals extends Model<PartnersProposalsAttributes, PartnersProposalsCreationAttributes> implements PartnersProposalsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare partner_id?: any;
  declare name?: any;
  declare type?: any;
  declare start_registration?: any;
  declare end_registration?: any;
  declare start_duration?: any;
  declare end_duration?: any;
  declare credits_count?: any;
  declare location?: any;
  declare description?: any;
  declare optional_notes?: any;
  declare status?: any;
  declare actioner_id?: any;
  declare actioned_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
