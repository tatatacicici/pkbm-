import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayPairsAttributes {
  id?: number;
  uuid?: string;
  user_invitor: string;
  user_invitee: string;
  accepted?: boolean;
  roleplay_id: string;
  video_link?: string;
  invitor_input?: string;
  invitee_input?: string;
  score?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RoleplayPairsCreationAttributes = Optional<RoleplayPairsAttributes, 'id' | 'uuid' | 'accepted' | 'video_link' | 'invitor_input' | 'invitee_input' | 'score' | 'deleted_at'>;

export class RoleplayPairs extends Model<RoleplayPairsAttributes, RoleplayPairsCreationAttributes> implements RoleplayPairsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare user_invitor: string;
  declare user_invitee: string;
  declare accepted?: boolean;
  declare roleplay_id: string;
  declare video_link?: string;
  declare invitor_input?: string;
  declare invitee_input?: string;
  declare score?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplayPairs {
    RoleplayPairs.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        user_invitor: { type: DataTypes.UUID, allowNull: false },
        user_invitee: { type: DataTypes.UUID, allowNull: false },
        accepted: { type: DataTypes.BOOLEAN },
        roleplay_id: { type: DataTypes.UUID, allowNull: false },
        video_link: { type: DataTypes.STRING, allowNull: true },
        invitor_input: { type: DataTypes.TEXT, allowNull: true },
        invitee_input: { type: DataTypes.TEXT, allowNull: true },
        score: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'roleplay_pairs',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplayPairs;
  }
}
