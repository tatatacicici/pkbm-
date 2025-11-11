import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayPairAttributes {
  id?: number;
  uuid?: string;
  user_invitor: string;
  user_invitee?: string;
  roleplay_id: string;
  video_link?: string;
  invitor_input?: string;
  invitee_input?: string;
  score?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RoleplayPairCreationAttributes = Optional<RoleplayPairAttributes, 'id' | 'uuid' | 'user_invitee' | 'video_link' | 'invitor_input' | 'invitee_input' | 'score' | 'deleted_at'>;

export class RoleplayPair extends Model<RoleplayPairAttributes, RoleplayPairCreationAttributes> implements RoleplayPairAttributes {
  declare id?: number;
  declare uuid?: string;
  declare user_invitor: string;
  declare user_invitee?: string;
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

  public static initModel(sequelize: Sequelize): typeof RoleplayPair {
    RoleplayPair.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        user_invitor: { type: DataTypes.UUID, allowNull: false },
        user_invitee: { type: DataTypes.UUID, allowNull: true },
        roleplay_id: { type: DataTypes.UUID, allowNull: false },
        video_link: { type: DataTypes.STRING, allowNull: true },
        invitor_input: { type: DataTypes.STRING, allowNull: true },
        invitee_input: { type: DataTypes.STRING, allowNull: true },
        score: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'roleplay_pair',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplayPair;
  }
}
