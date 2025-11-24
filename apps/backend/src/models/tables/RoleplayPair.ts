import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayPairAttributes {
  id?: number;
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

export type RoleplayPairCreationAttributes = Optional<RoleplayPairAttributes, 'id' | 'uuid' | 'userInvitee' | 'videoLink' | 'invitorInput' | 'inviteeInput' | 'score' | 'deletedAt'>;

export class RoleplayPair extends Model<RoleplayPairAttributes, RoleplayPairCreationAttributes> implements RoleplayPairAttributes {
  declare id?: number;
  declare uuid?: string;
  declare userInvitor: string;
  declare userInvitee?: string;
  declare roleplayId: string;
  declare videoLink?: string;
  declare invitorInput?: string;
  declare inviteeInput?: string;
  declare score?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RoleplayPair {
    RoleplayPair.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        userInvitor: { type: DataTypes.UUID, allowNull: false,
            field: 'user_invitor'
        },
        userInvitee: { type: DataTypes.UUID, allowNull: true,
            field: 'user_invitee'
        },
        roleplayId: { type: DataTypes.UUID, allowNull: false,
            field: 'roleplay_id'
        },
        videoLink: { type: DataTypes.STRING, allowNull: true,
            field: 'video_link'
        },
        invitorInput: { type: DataTypes.STRING, allowNull: true,
            field: 'invitor_input'
        },
        inviteeInput: { type: DataTypes.STRING, allowNull: true,
            field: 'invitee_input'
        },
        score: { type: DataTypes.INTEGER, allowNull: true,
            field: 'score'
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
        tableName: 'roleplay_pair',
        timestamps: true,
        underscored: true,
      }
    );
    return RoleplayPair;
  }
}
