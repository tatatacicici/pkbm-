import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayPairAttributes {
  id?: any;
  uuid?: any;
  user_invitor?: any;
  user_invitee?: any;
  roleplay_id?: any;
  video_link?: any;
  invitor_input?: any;
  invitee_input?: any;
  score?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplayPairCreationAttributes = Optional<RoleplayPairAttributes, 'id'>;

export class RoleplayPair extends Model<RoleplayPairAttributes, RoleplayPairCreationAttributes> implements RoleplayPairAttributes {
  declare id?: any;
  declare uuid?: any;
  declare user_invitor?: any;
  declare user_invitee?: any;
  declare roleplay_id?: any;
  declare video_link?: any;
  declare invitor_input?: any;
  declare invitee_input?: any;
  declare score?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
