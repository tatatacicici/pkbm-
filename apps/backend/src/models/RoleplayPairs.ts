import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RoleplayPairsAttributes {
  id: number;
  uuid?: string;
  userInvitor: string;
  userInvitee: string;
  accepted: boolean;
  roleplayId: string;
  videoLink?: string;
  invitorInput?: string;
  inviteeInput?: string;
  score?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplayPairsPk = "id";
export type RoleplayPairsId = RoleplayPairs[RoleplayPairsPk];
export type RoleplayPairsOptionalAttributes = "id" | "uuid" | "videoLink" | "invitorInput" | "inviteeInput" | "score" | "deletedAt";
export type RoleplayPairsCreationAttributes = Optional<RoleplayPairsAttributes, RoleplayPairsOptionalAttributes>;

export class RoleplayPairs extends Model<RoleplayPairsAttributes, RoleplayPairsCreationAttributes> implements RoleplayPairsAttributes {
  id!: number;
  uuid?: string;
  userInvitor!: string;
  userInvitee!: string;
  accepted!: boolean;
  roleplayId!: string;
  videoLink?: string;
  invitorInput?: string;
  inviteeInput?: string;
  score?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RoleplayPairs {
    return RoleplayPairs.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    userInvitor: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_invitor'
    },
    userInvitee: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_invitee'
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    roleplayId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'roleplay_id'
    },
    videoLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'video_link'
    },
    invitorInput: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invitor_input'
    },
    inviteeInput: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'invitee_input'
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'roleplay_pairs',
    schema: 'public',
    timestamps: false
  });
  }
}
