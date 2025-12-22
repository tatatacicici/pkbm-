import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RoleplayPairAttributes {
  id: number;
  uuid?: string;
  userInvitor: string;
  userInvitee?: string;
  roleplayId: string;
  videoLink?: string;
  invitorInput?: string;
  inviteeInput?: string;
  score?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RoleplayPairPk = "id";
export type RoleplayPairId = RoleplayPair[RoleplayPairPk];
export type RoleplayPairOptionalAttributes = "id" | "uuid" | "userInvitee" | "videoLink" | "invitorInput" | "inviteeInput" | "score" | "deletedAt";
export type RoleplayPairCreationAttributes = Optional<RoleplayPairAttributes, RoleplayPairOptionalAttributes>;

export class RoleplayPair extends Model<RoleplayPairAttributes, RoleplayPairCreationAttributes> implements RoleplayPairAttributes {
  id!: number;
  uuid?: string;
  userInvitor!: string;
  userInvitee?: string;
  roleplayId!: string;
  videoLink?: string;
  invitorInput?: string;
  inviteeInput?: string;
  score?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RoleplayPair {
    return RoleplayPair.init({
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
      allowNull: true,
      field: 'user_invitee'
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
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'invitor_input'
    },
    inviteeInput: {
      type: DataTypes.STRING(255),
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
    tableName: 'roleplay_pair',
    schema: 'public',
    timestamps: false
  });
  }
}
